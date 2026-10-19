import express from 'express';
import bcrypt from 'bcryptjs';
import crypto from 'node:crypto';
import db from '../db/database.js';
import { generateToken, requireAuth } from '../middleware/auth.js';

const router = express.Router();

// POST /api/auth/register
router.post('/register', (req, res) => {
  try {
    const { name, email, password, confirmPassword, language = 'en' } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and password are required.',
        messageKn: 'ಹೆಸರು, ಇಮೇಲ್ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ಕಡ್ಡಾಯ.'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters long.',
        messageKn: 'ಪಾಸ್‌ವರ್ಡ್ ಕನಿಷ್ಠ ೬ ಅಕ್ಷರಗಳಾಗಿರಬೇಕು.'
      });
    }

    if (confirmPassword && password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'Passwords do not match.',
        messageKn: 'ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ.'
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    // Check if user already exists
    const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(cleanEmail);
    if (existing) {
      return res.status(409).json({
        success: false,
        message: 'An account with this email already exists.',
        messageKn: 'ಈ ಇಮೇಲ್‌ನೊಂದಿಗೆ ಈಗಾಗಲೇ ಖಾತೆಯೊಂದು ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ.'
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    const insertUser = db.prepare(`
      INSERT INTO users (name, email, password_hash, language_pref)
      VALUES (?, ?, ?, ?)
    `);
    const result = insertUser.run(name.trim(), cleanEmail, passwordHash, language);
    const userId = Number(result.lastInsertRowid);

    // Create default profile
    db.prepare(`
      INSERT INTO user_profiles (user_id, home_city, travel_style, dietary_pref, interests)
      VALUES (?, 'Bengaluru', 'moderate', 'all', ?)
    `).run(userId, JSON.stringify(['Heritage', 'Culture', 'Food']));

    const userObj = {
      id: userId,
      name: name.trim(),
      email: cleanEmail,
      language_pref: language
    };

    const token = generateToken(userObj);

    // Set cookie
    res.cookie('nammatrip_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(201).json({
      success: true,
      message: 'Account created successfully! Welcome to NammaTrip AI.',
      messageKn: 'ಖಾತೆ ಯಶಸ್ವಿಯಾಗಿ ರಚನೆಯಾಗಿದೆ! ನಮ್ಮಟ್ರಿಪ್‌ಗೆ ಸ್ವಾಗತ.',
      token,
      user: userObj
    });
  } catch (err) {
    console.error('Registration error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to create account. Please try again.',
      messageKn: 'ಖಾತೆ ರಚಿಸಲು ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.'
    });
  }
});

// POST /api/auth/login
router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both email and password.',
        messageKn: 'ದಯವಿಟ್ಟು ಇಮೇಲ್ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ.'
      });
    }

    const cleanEmail = email.trim().toLowerCase();
    const user = db.prepare('SELECT id, name, email, password_hash, language_pref FROM users WHERE email = ?').get(cleanEmail);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
        messageKn: 'ಅಮಾನ್ಯ ಇಮೇಲ್ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್.'
      });
    }

    const isValid = bcrypt.compareSync(password, user.password_hash);
    if (!isValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
        messageKn: 'ಅಮಾನ್ಯ ಇಮೇಲ್ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್.'
      });
    }

    const userObj = {
      id: user.id,
      name: user.name,
      email: user.email,
      language_pref: user.language_pref
    };

    const token = generateToken(userObj);

    res.cookie('nammatrip_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.json({
      success: true,
      message: `Welcome back, ${user.name}!`,
      messageKn: `ಮತ್ತೆ ಸ್ವಾಗತ, ${user.name}!`,
      token,
      user: userObj
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({
      success: false,
      message: 'Login failed due to a server error. Please try again.',
      messageKn: 'ಲಾಗಿನ್ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ತಾಂತ್ರಿಕ ದೋಷ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.'
    });
  }
});

// GET /api/auth/me
router.get('/me', requireAuth, (req, res) => {
  try {
    const profile = db.prepare('SELECT * FROM user_profiles WHERE user_id = ?').get(req.user.id);
    let parsedInterests = ['Heritage', 'Culture', 'Food'];
    if (profile && profile.interests) {
      try { parsedInterests = JSON.parse(profile.interests); } catch {}
    }

    return res.json({
      success: true,
      user: req.user,
      profile: {
        ...profile,
        interests: parsedInterests
      }
    });
  } catch (err) {
    console.error('Me endpoint error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve profile data.',
      messageKn: 'ಪ್ರೊಫೈಲ್ ಮಾಹಿತಿ ಪಡೆಯಲು ವಿಫಲವಾಗಿದೆ.'
    });
  }
});

// POST /api/auth/forgot-password
router.post('/forgot-password', (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Please provide your registered email address.',
        messageKn: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ನೋಂದಾಯಿತ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ.'
      });
    }

    const cleanEmail = email.trim().toLowerCase();
    const user = db.prepare('SELECT id, name FROM users WHERE email = ?').get(cleanEmail);

    if (!user) {
      // Don't leak user existence for security, return generic success
      return res.json({
        success: true,
        message: 'If an account exists with this email, a password reset link has been generated.',
        messageKn: 'ಈ ಇಮೇಲ್‌ನೊಂದಿಗೆ ಖಾತೆ ಇದ್ದರೆ, ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಸುವ ಲಿಂಕ್ ಕಳುಹಿಸಲಾಗಿದೆ.'
      });
    }

    // Generate secure random reset token
    const token = crypto.randomBytes(24).toString('hex');
    const expiresAt = Date.now() + 3600000; // 1 hour validity

    db.prepare(`
      INSERT INTO password_resets (user_id, token, expires_at)
      VALUES (?, ?, ?)
    `).run(user.id, token, expiresAt);

    return res.json({
      success: true,
      message: 'Password reset instructions generated successfully.',
      messageKn: 'ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಸುವ ಸೂಚನೆಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗಿದೆ.',
      resetToken: token,
      resetUrl: `/reset-password?token=${token}`,
      note: 'In this environment, you can directly use the provided reset token or link.'
    });
  } catch (err) {
    console.error('Forgot password error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to process password reset request.',
      messageKn: 'ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಕೆ ಪ್ರಕ್ರಿಯೆ ವಿಫಲವಾಗಿದೆ.'
    });
  }
});

// POST /api/auth/reset-password
router.post('/reset-password', (req, res) => {
  try {
    const { token, newPassword, confirmPassword } = req.body;

    if (!token || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Reset token and new password are required.',
        messageKn: 'ರೀಸೆಟ್ ಟೋಕನ್ ಮತ್ತು ಹೊಸ ಪಾಸ್‌ವರ್ಡ್ ಕಡ್ಡಾಯ.'
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'New password must be at least 6 characters long.',
        messageKn: 'ಹೊಸ ಪಾಸ್‌ವರ್ಡ್ ಕನಿಷ್ಠ ೬ ಅಕ್ಷರಗಳಾಗಿರಬೇಕು.'
      });
    }

    if (confirmPassword && newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'Passwords do not match.',
        messageKn: 'ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ.'
      });
    }

    const resetRecord = db.prepare(`
      SELECT id, user_id, expires_at, used
      FROM password_resets
      WHERE token = ?
    `).get(token);

    if (!resetRecord) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or unrecognized reset token.',
        messageKn: 'ಅಮಾನ್ಯ ಅಥವಾ ಗುರುತಿಸಲಾಗದ ರೀಸೆಟ್ ಟೋಕನ್.'
      });
    }

    if (resetRecord.used === 1) {
      return res.status(400).json({
        success: false,
        message: 'This password reset link has already been used.',
        messageKn: 'ಈ ಪಾಸ್‌ವರ್ಡ್ ರೀಸೆಟ್ ಲಿಂಕ್ ಅನ್ನು ಈಗಾಗಲೇ ಬಳಸಲಾಗಿದೆ.'
      });
    }

    if (Date.now() > resetRecord.expires_at) {
      return res.status(400).json({
        success: false,
        message: 'This reset link has expired. Please request a new one.',
        messageKn: 'ಈ ಲಿಂಕ್‌ನ ಅವಧಿ ಮೀರಿದೆ. ದಯವಿಟ್ಟು ಹೊಸ ಲಿಂಕ್ ಕೋರಿ.'
      });
    }

    // Hash new password and update
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newPassword, salt);

    db.prepare('UPDATE users SET password_hash = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').run(hash, resetRecord.user_id);
    db.prepare('UPDATE password_resets SET used = 1 WHERE id = ?').run(resetRecord.id);

    return res.json({
      success: true,
      message: 'Your password has been reset successfully! You can now log in.',
      messageKn: 'ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ಯಶಸ್ವಿಯಾಗಿ ಬದಲಾಗಿದೆ! ಈಗ ನೀವು ಲಾಗ್ ಇನ್ ಮಾಡಬಹುದು.'
    });
  } catch (err) {
    console.error('Reset password error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to reset password. Please try again.',
      messageKn: 'ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಸಲು ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.'
    });
  }
});

// PUT /api/auth/profile
router.put('/profile', requireAuth, (req, res) => {
  try {
    const { name, language_pref, home_city, travel_style, dietary_pref, interests } = req.body;

    if (name) {
      db.prepare('UPDATE users SET name = ?, language_pref = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?')
        .run(name.trim(), language_pref || req.user.language_pref, req.user.id);
    }

    const interestsStr = Array.isArray(interests) ? JSON.stringify(interests) : '[]';

    db.prepare(`
      INSERT INTO user_profiles (user_id, home_city, travel_style, dietary_pref, interests)
      VALUES (?, ?, ?, ?, ?)
      ON CONFLICT(user_id) DO UPDATE SET
        home_city = excluded.home_city,
        travel_style = excluded.travel_style,
        dietary_pref = excluded.dietary_pref,
        interests = excluded.interests
    `).run(req.user.id, home_city || 'Bengaluru', travel_style || 'moderate', dietary_pref || 'all', interestsStr);

    const updatedUser = db.prepare('SELECT id, name, email, language_pref FROM users WHERE id = ?').get(req.user.id);

    return res.json({
      success: true,
      message: 'Profile updated successfully.',
      messageKn: 'ಪ್ರೊಫೈಲ್ ಯಶಸ್ವಿಯಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ.',
      user: updatedUser
    });
  } catch (err) {
    console.error('Profile update error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to update profile.',
      messageKn: 'ಪ್ರೊಫೈಲ್ ನವೀಕರಿಸಲು ಸಾಧ್ಯವಾಗಿಲ್ಲ.'
    });
  }
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.clearCookie('nammatrip_token');
  return res.json({
    success: true,
    message: 'Logged out successfully.',
    messageKn: 'ಯಶಸ್ವಿಯಾಗಿ ಲಾಗ್ ಔಟ್ ಆಗಿದ್ದೀರಿ.'
  });
});

export default router;

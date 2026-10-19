import jwt from 'jsonwebtoken';
import db from '../db/database.js';

const JWT_SECRET = process.env.JWT_SECRET || 'nammatrip_super_secret_jwt_key_2026_karnataka_heritage';

export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
      language_pref: user.language_pref
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
};

export const requireAuth = (req, res, next) => {
  try {
    let token = null;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies && req.cookies.nammatrip_token) {
      token = req.cookies.nammatrip_token;
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required. Please log in.',
        messageKn: 'ದೃಢೀಕರಣ ಅಗತ್ಯವಿದೆ. ದಯವಿಟ್ಟು ಲಾಗ್ ಇನ್ ಮಾಡಿ.'
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = db.prepare('SELECT id, name, email, language_pref, created_at FROM users WHERE id = ?').get(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User account not found or session expired.',
        messageKn: 'ಬಳಕೆದಾರರ ಖಾತೆ ಕಂಡುಬಂದಿಲ್ಲ ಅಥವಾ ಅವಧಿ ಮುಗಿದಿದೆ.'
      });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired session. Please log in again.',
      messageKn: 'ಅಮಾನ್ಯ ಅಥವಾ ಅವಧಿ ಮೀರಿದ ಲಾಗಿನ್. ದಯವಿಟ್ಟು ಮತ್ತೆ ಲಾಗ್ ಇನ್ ಮಾಡಿ.'
    });
  }
};

export const optionalAuth = (req, res, next) => {
  try {
    let token = null;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies && req.cookies.nammatrip_token) {
      token = req.cookies.nammatrip_token;
    }

    if (token) {
      const decoded = jwt.verify(token, JWT_SECRET);
      const user = db.prepare('SELECT id, name, email, language_pref FROM users WHERE id = ?').get(decoded.id);
      if (user) {
        req.user = user;
      }
    }
  } catch {
    // Ignore error for optional auth
    req.user = null;
  }
  next();
};

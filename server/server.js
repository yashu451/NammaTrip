import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

// Load environment variables
dotenv.config();

import db from './db/database.js';
import authRoutes from './routes/auth.js';
import tripsRoutes from './routes/trips.js';
import favoritesRoutes from './routes/favorites.js';
import destinationsRoutes from './routes/destinations.js';
import plannerRoutes from './routes/planner.js';
import mapRoutes from './routes/map.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

// Enable trust proxy for Render reverse proxy (TLS termination, IP forwarding)
app.set('trust proxy', 1);

// Security & Parsing Middleware
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// Request logging in development
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    if (req.originalUrl.startsWith('/api')) {
      console.log(`[API] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
    }
  });
  next();
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/trips', tripsRoutes);
app.use('/api/favorites', favoritesRoutes);
app.use('/api/destinations', destinationsRoutes);
app.use('/api/planner', plannerRoutes);
app.use('/api/map', mapRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  let dbHealthy = false;
  try {
    const test = db.prepare('SELECT 1 as alive').get();
    dbHealthy = test?.alive === 1;
  } catch (e) {
    dbHealthy = false;
  }

  const aiEngine = process.env.GEMINI_API_KEY ? 'Gemini 2.5 Flash + Curated Engine' : 'Curated Karnataka Heritage Engine';

  return res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'NammaTrip AI Backend',
    database: dbHealthy ? 'connected (SQLite WAL)' : 'error',
    aiEngine,
    version: '1.0.0'
  });
});

// Serve frontend static build and public assets if they exist
const clientImagesPath = path.resolve(__dirname, '../client/public/images');
if (fs.existsSync(clientImagesPath)) {
  app.use('/images', express.static(clientImagesPath));
}

const clientPublicPath = path.resolve(__dirname, '../client/public');
if (fs.existsSync(clientPublicPath)) {
  app.use(express.static(clientPublicPath));
}

const clientDistPath = path.resolve(__dirname, '../client/dist');
if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));
}

// Global 404 handler for unmatched /api routes
app.use((req, res, next) => {
  if (req.originalUrl.startsWith('/api')) {
    return res.status(404).json({
      success: false,
      message: 'API route not found.',
      messageKn: 'ಎಪಿಐ ಮಾರ್ಗ ಕಂಡುಬಂದಿಲ್ಲ.'
    });
  }
  
  // If not API and client build exists, serve index.html for SPA routing
  const clientIndexPath = path.join(clientDistPath, 'index.html');
  if (fs.existsSync(clientIndexPath) && (req.method === 'GET' || req.method === 'HEAD')) {
    return res.sendFile(clientIndexPath);
  }
  
  next();
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message,
    messageKn: 'ಸರ್ವರ್ ಆಂತರಿಕ ದೋಷ ಸಂಭವಿಸಿದೆ.'
  });
});

// Start listening on HOST to accept external connections (Render / Cloud requirement)
app.listen(PORT, HOST, () => {
  const displayHost = HOST === '0.0.0.0' ? 'localhost' : HOST;
  console.log(`
╔══════════════════════════════════════════════════════════╗
║                🐘 NammaTrip AI Server 🛕                ║
║  Backend running at: http://${displayHost}:${PORT}             ║
║  API Health:         http://${displayHost}:${PORT}/api/health     ║
║  Listening Host:     ${HOST}:${PORT} (external ready)      ║
║  Environment:        ${process.env.NODE_ENV || 'development'}                     ║
╚══════════════════════════════════════════════════════════╝
  `);
});

export default app;

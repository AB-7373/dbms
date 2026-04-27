# Streamboat

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Installation & Setup](#installation--setup)
- [Running the Project](#running-the-project)
- [Docker & Container Services](#docker--container-services)
- [Project Architecture](#project-architecture)
- [Key Components](#key-components)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Authentication & Security](#authentication--security)
- [Real-Time Features](#real-time-features)
- [Video Watermarking](#video-watermarking)
- [Styling & Theme](#styling--theme)
- [Scripts](#scripts)
- [Building for Distribution](#building-for-distribution)
- [Troubleshooting](#troubleshooting)

---

## Project Overview

**Streamboat** is a comprehensive digital asset management and copyright protection platform. It enables creators to upload, manage, and protect their digital media with advanced watermarking technology, while providing a community library for discovering and streaming content. The platform combines robust backend services with an intuitive frontend interface, ensuring secure content distribution and copyright enforcement.

The application provides seamless integration between media management, copyright protection, and community features, with enterprise-grade security and scalability.

---

## Tech Stack

### Infrastructure & Deployment

- **Containerization:** Docker - Container images for all services
- **Orchestration:** Docker Compose - Multi-container orchestration
- **Web Server:** NGINX (Alpine) - Reverse proxy and load balancing
- **Caching:** Redis (Alpine) - In-memory data store for sessions and caching

### Backend

- **Runtime:** Node.js (v20-alpine) - Lightweight Node.js runtime
- **Framework:** Express.js (v5.2.1) - Web server and API routing
- **Database:** MongoDB (v9.5.0) - NoSQL document database
- **ODM:** Mongoose (v9.5.0) - MongoDB object modeling
- **Authentication:** JWT (jsonwebtoken v9.0.3) - Token-based auth
- **Encryption:** bcryptjs (v3.0.3) - Password hashing
- **Session Store:** Redis - Session persistence and caching

### AI & Machine Learning

- **Generative AI:** @google/generative-ai (v0.24.1) - Gemini API integration
- **Vector Database:** @pinecone-database/pinecone (v7.2.0) - Semantic embeddings
- **Video Processing:** fluent-ffmpeg (v2.1.3) - FFmpeg wrapper

### Media Management

- **Cloud Storage:** Cloudinary (v1.41.3) - Image/video hosting
- **Multer Storage:** multer-storage-cloudinary (v4.0.0) - Cloud upload middleware
- **File Conversion:** pdf2pic (v3.2.0) - PDF to image conversion
- **Multer:** multer (v2.1.1) - File upload handling

### Utilities

- **Email Service:** Nodemailer (v6.10.1) - Email notifications
- **HTTP Client:** Axios (v1.15.1) - API calls
- **Environment Config:** dotenv (v17.4.2) - Environment variables
- **CORS:** cors (v2.8.6) - Cross-origin resource sharing

### Frontend

- **Library:** React (v19.2.4) - UI framework
- **Build Tool:** Vite (v8.0.4) - Next-gen frontend tooling
- **Routing:** react-router-dom (v7.14.1) - Client-side routing
- **HTTP Client:** Axios (v1.15.1) - API requests
- **Styling:** Tailwind CSS (v4.2.2) - Utility-first CSS framework
- **Animation:** framer-motion (v12.38.0) - Motion library
- **UI Components:** lucide-react (v1.8.0) - Icon library
- **Notifications:** react-hot-toast (v2.6.0) - Toast notifications
- **OAuth:** @react-oauth/google (v0.13.5) - Google authentication
- **Utilities:** clsx, tailwind-merge - CSS utilities

### Video Watermarking

- **Framework:** PyTorch with CUDA support
- **Models:** VideoSeal, PixelSeal, ChunkySeal
- **Python:** 3.10+ with TorchVision, TorchAudio

---

## Features

### 1. User Authentication & Authorization
- Email/password registration with OTP verification
- Google OAuth integration
- JWT-based session management
- Two-factor authentication support
- Automatic token refresh
- Secure logout
- Email verification

### 2. Digital Asset Management
- Upload images, videos, and documents
- Cloudinary integration for scalable storage
- Metadata extraction and organization
- Asset versioning and history tracking
- Multiple file format support (JPEG, PNG, MP4, PDF, etc.)
- Optimized cloud URL generation

### 3. AI-Powered Content Analysis
- Gemini API integration for intelligent content analysis
- Automatic metadata generation
- Semantic search via Pinecone embeddings
- Content categorization
- Smart recommendations

### 4. Advanced Copyright Protection
- Digital watermarking with VideoSeal
- Copyright claim management
- Content fingerprinting
- Copyright verification system
- Watermark detection and extraction

### 5. Media Library
- Browse and search community library
- Advanced filtering and sorting
- Content discovery
- Public media streaming
- Rating and review system

### 6. Personal Media Management
- Personal media collection
- Upload and organize personal content
- Manage privacy settings
- Share with specific users
- Delete and manage uploads

### 7. Copyright Claims
- File copyright claims on content
- Track claim status
- Evidence submission
- Settlement process
- Dispute resolution

### 8. User Profiles
- User information management
- Profile picture upload
- Subscription plan management
- Statistics and analytics
- Settings configuration

### 9. Social Features
- User discovery
- Follow system
- Content recommendations
- User ratings and reviews

---

## Project Structure

```
streamboat/
├── backend/                             # Node.js/Express API server
│   ├── config/
│   │   └── db.js                       # MongoDB connection setup
│   │
│   ├── controllers/                    # Request handlers
│   │   ├── authController.js           # Authentication logic
│   │   ├── assetController.js          # Asset management
│   │   ├── uploadController.js         # Upload & embedding generation
│   │   ├── userController.js           # User profile management
│   │   ├── claimController.js          # Copyright claims
│   │   └── userMediaController.js      # Personal media
│   │
│   ├── middlewares/                    # Express middlewares
│   │   ├── authMiddleware.js           # JWT verification
│   │   └── uploadMiddleware.js         # File upload config
│   │
│   ├── models/                         # Mongoose schemas
│   │   ├── User.js                     # User schema
│   │   ├── Asset.js                    # Asset/media schema
│   │   ├── Claim.js                    # Copyright claim schema
│   │   └── Session.js                  # Session schema
│   │
│   ├── routes/                         # API endpoints
│   │   ├── authRoutes.js               # /api/auth
│   │   ├── assetRoutes.js              # /api/assets
│   │   ├── userRoutes.js               # /api/user
│   │   ├── uploadRoutes.js             # /api/upload
│   │   └── claimRoutes.js              # /api/copyright
│   │
│   ├── utils/                          # Utility functions
│   │   ├── mailer.js                   # Email service
│   │   └── sentinelAiMock.js           # AI mock service
│   │
│   ├── scripts/                        # Utility scripts
│   │   └── embed.js                    # Embedding generation
│   │
│   ├── index.js                        # Server entry point
│   ├── package.json                    # Backend dependencies
│   ├── .env                            # Environment variables
│   └── .env.example                    # Environment template
│
├── frontend/                            # React + Vite SPA
│   ├── src/
│   │   ├── assets/                     # Static assets
│   │   │   └── images/                 # Image files
│   │   │
│   │   ├── components/                 # Reusable React components
│   │   │   ├── Layout.jsx              # Main layout wrapper
│   │   │   ├── Sidebar.jsx             # Navigation sidebar
│   │   │   ├── TopBar.jsx              # Top navigation bar
│   │   │   ├── AssetCard.jsx           # Media asset card
│   │   │   │
│   │   │   ├── auth/                   # Auth components
│   │   │   │   └── Login.jsx, Signup.jsx
│   │   │   │
│   │   │   ├── layout/                 # Layout components
│   │   │   │
│   │   │   └── ui/                     # Shared UI components
│   │   │
│   │   ├── pages/                      # Page components (routes)
│   │   │   ├── Landing.jsx             # Home page
│   │   │   ├── Auth.jsx                # Login/Signup page
│   │   │   ├── Library.jsx             # Public media library
│   │   │   ├── MyMedia.jsx             # Personal uploads
│   │   │   ├── Upload.jsx              # Media upload page
│   │   │   ├── ClaimCopyright.jsx      # Copyright claim form
│   │   │   ├── Profile.jsx             # User profile page
│   │   │   ├── MediaDisplay.jsx        # Media detail view
│   │   │   └── Landing.jsx             # Landing page
│   │   │
│   │   ├── context/                    # React Context
│   │   │   └── AuthContext.jsx         # Authentication state
│   │   │
│   │   ├── hooks/                      # Custom React hooks
│   │   │   └── useUiProtection.js      # UI protection utilities
│   │   │
│   │   ├── lib/                        # Utility libraries
│   │   │   ├── axiosInstance.js        # Axios configuration
│   │   │   └── utils.js                # Helper functions
│   │   │
│   │   ├── test/                       # Test files
│   │   │
│   │   ├── App.jsx                     # Root component
│   │   ├── App.css                     # App styles
│   │   ├── index.css                   # Global styles
│   │   ├── main.jsx                    # React entry point
│   │   └── index.html                  # HTML template
│   │
│   ├── eslint.config.js                # ESLint configuration
│   ├── vite.config.js                  # Vite configuration
│   ├── tailwind.config.js              # Tailwind CSS config
│   ├── package.json                    # Frontend dependencies
│   ├── README.md                       # Frontend documentation
│   └── .env.example                    # Environment template
│
├── video-seal/                          # Video watermarking service
│   ├── videoseal/                      # Main VideoSeal package
│   │   ├── models/                     # ML models
│   │   ├── augmentation/               # Data augmentation
│   │   ├── data/                       # Dataset handling
│   │   ├── evals/                      # Evaluation scripts
│   │   ├── utils/                      # Utility functions
│   │   ├── config/                     # Configuration files
│   │   ├── notebooks/                  # Jupyter notebooks
│   │   ├── scripts/                    # Processing scripts
│   │   ├── inference_av.py             # Audio-video inference
│   │   ├── inference_streaming.py      # Streaming inference
│   │   ├── train.py                    # Training script
│   │   ├── requirements.txt            # Python dependencies
│   │   └── README.md                   # VideoSeal docs
│   │
│   ├── wmforger/                       # WmForger watermarking
│   │   ├── train.py                    # Training script
│   │   ├── optimize_image.py           # Image optimization
│   │   └── README.md                   # WmForger docs
│   │
│   ├── watermark_service.py            # Main watermarking service
│   ├── requirements.txt                # Python dependencies
│   ├── ckpts/                          # Model checkpoints
│   └── README.md                       # Video-seal docs
│
└── README.md                           # This file
```

---

## Environment Variables

### Backend Configuration

Create a `.env` file in the `backend/` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>

# Redis Cache & Sessions
REDIS_URL=redis://redis_cache:6379
REDIS_HOST=redis_cache
REDIS_PORT=6379

# JWT
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# Cloudinary (Image/Video Storage)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# Pinecone Vector DB
PINECONE_API_KEY=your_pinecone_api_key

# Email Service (Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=noreply@streamboat.com

# Frontend URL (for CORS & redirects)
FRONTEND_URL=http://localhost:5173
```

**Redis Configuration Notes:**
- In Docker: Use `redis://redis_cache:6379` (service name)
- Locally: Use `redis://localhost:6379`
- For production, add Redis authentication with password

### Frontend Configuration

Create a `.env` file in the `frontend/` directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000/api

# Google OAuth
VITE_GOOGLE_CLIENT_ID=your_google_client_id

# App Configuration
VITE_APP_NAME=Streamboat
```

### Video-Seal Configuration

Create a `.env` file in the `video-seal/` directory:

```env
# Model Configuration
MODEL_PATH=./ckpts/videoseal_y_256b_img.pth
CUDA_VISIBLE_DEVICES=0

# Service Configuration
VIDEO_SEAL_PORT=8000
```

### NGINX Configuration

The NGINX reverse proxy configuration is managed in [nginx/nginx.conf](nginx/nginx.conf).

**Key responsibilities:**
- Routes `/api/*` requests to backend service (port 5000)
- Serves frontend static files
- Handles CORS headers
- Load balancing (configurable)
- SSL/TLS termination (in production)

**Default configuration:**
```nginx
upstream backend {
  server node_backend:5000;
}

server {
  listen 80;
  
  location /api {
    proxy_pass http://backend;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }
  
  location / {
    # Frontend serving
    root /usr/share/nginx/html;
    try_files $uri $uri/ /index.html;
  }
}
```

**To modify NGINX configuration in production:**
1. Edit `nginx/nginx.conf`
2. Rebuild NGINX container: `docker compose up -d --build nginx`
3. No restart needed for config-only changes with `--build`

### Redis Cache & Sessions

Redis is used for session management, caching, and rate limiting in the backend.

**Usage in Backend:**
```javascript
// Session storage
const session = require('express-session');
const RedisStore = require('connect-redis').default;
const redis = require('redis');

const redisClient = redis.createClient({
  url: process.env.REDIS_URL
});

session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
});
```

**Common use cases:**
- User session persistence
- JWT token caching
- Rate limiting counters
- OTP storage
- Temporary file references
- Real-time data structures

**Redis Commands (for debugging):**
```bash
# Connect to Redis in Docker
docker exec -it redis_cache redis-cli

# View all keys
KEYS *

# Get session info
GET <key>

# Clear all data
FLUSHALL

# Check memory usage
INFO memory
```

**Configuration in Docker:**
- No authentication by default (internal network)
- Runs in memory (data lost on restart)
- For persistence, mount volume: `volumes: - redis-data:/data`
- For password protection, add to `docker-compose.yml`:
  ```yaml
  redis:
    command: redis-server --requirepass your_password
  ```

---

## Installation & Setup

### Prerequisites

**For Docker-based setup:**
- **Docker** (v20.10+) - Container engine
- **Docker Compose** (v1.29+) - Multi-container orchestration
- **Git** for version control

**For local development (without Docker):**
- **Node.js** (v20 or higher) for backend
- **Python** (v3.10+) for video watermarking
- **MongoDB** (local or Atlas cloud)
- **Redis** (optional, for session management)
- **npm** or **yarn** package manager
- **Git** for version control

**External Services:**
- **Cloudinary Account** for media hosting
- **Google Cloud Console** for OAuth and Gemini API
- **Pinecone Account** for vector embeddings
- **MongoDB Atlas Account** (or local MongoDB)
- **SMTP Server** (Gmail, SendGrid, etc.) for email

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-org/streamboat.git
cd streamboat
```

### Step 2: Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your credentials
nano .env

# Start the server
npm run dev
```

Backend will be running at `http://localhost:5000`

### Step 3: Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your API URL
nano .env

# Start development server
npm run dev
```

Frontend will be accessible at `http://localhost:5173`

### Step 4: Video-Seal Setup

```bash
cd video-seal

# Create Python virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Download model checkpoint
python -c "import videoseal; videoseal.load('videoseal')"

# Start watermarking service
python watermark_service.py
```

---

## Running the Project

### Docker Compose (Recommended for Development & Production)

The entire application can be run using Docker Compose with all services containerized:

**Prerequisites:**
- Docker installed
- Docker Compose installed
- Environment files created (see [Environment Variables](#environment-variables))

**Services included:**
- `backend` - Node.js API server (port 5000)
- `nginx` - Reverse proxy & load balancer (port 80)
- `watermark` - VideoSeal watermarking service (port 8000)
- `redis` - In-memory cache & session store (port 6379)

**Start all services:**
```bash
# Navigate to project root
cd streamboat

# Create environment files
cp backend/.env.example backend/.env
cp video-seal/.env.example video-seal/.env

# Start all containers in the background
docker compose up -d

# View logs
docker compose logs -f

# Stop all containers
docker compose down

# Stop and remove volumes
docker compose down -v
```

**Access the application:**
- Frontend (via NGINX): `http://localhost:80` or `http://localhost`
- Backend API directly: `http://localhost:5000/api`
- Video-Seal service: `http://localhost:8000`
- Redis: `localhost:6379`

**Development Environment (Without Docker)**

**Terminal 1: Start Backend Server**
```bash
cd backend
npm install
npm run dev
```

**Terminal 2: Start Frontend Development Server**
```bash
cd frontend
npm install
npm run dev
```

**Terminal 3: Start Video-Seal Service (Optional)**
```bash
cd video-seal
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python watermark_service.py
```

**Terminal 4: Start Redis (Optional for session management)**
```bash
# Using Docker:
docker run -d -p 6379:6379 redis:alpine

# Or locally installed Redis:
redis-server
```

Access the application at `http://localhost:5173`

### Production Build

**Frontend Build:**
```bash
cd frontend
npm run build
# Output: dist/ directory
```

**Backend Production:**
```bash
cd backend
npm start
```

**Using Docker in Production:**
```bash
# Build images with production tags
docker compose -f docker-compose.yml build

# Start production containers
docker compose -f docker-compose.yml up -d

# Scale backend if needed
docker compose up -d --scale backend=3
```

### Linting & Code Quality

**Frontend:**
```bash
cd frontend
npm run lint
```

---

## Docker & Container Services

### Service Overview

The application is designed to run as a containerized multi-service application using Docker Compose. Each service runs in its own isolated container while communicating over Docker's internal network.

#### **NGINX (Reverse Proxy)**
- **Image:** `nginx:alpine`
- **Container Name:** `nginx_proxy`
- **Port:** 80 (external) → 80 (internal)
- **Purpose:**
  - Reverse proxy for backend API requests
  - Routes incoming requests to appropriate services
  - Load balancing capability
  - Static file serving (if needed)
  - CORS handling
- **Configuration:** [nginx/nginx.conf](nginx/nginx.conf)
- **Access:** `http://localhost`

#### **Backend API (Node.js)**
- **Dockerfile:** [backend/dockerfile](backend/dockerfile)
- **Base Image:** `node:20-alpine` (lightweight Node.js)
- **Container Name:** `node_backend`
- **Port:** 5000 (exposed internally)
- **Purpose:**
  - RESTful API server
  - Request handling and routing
  - Business logic execution
  - Database operations via Mongoose
  - External API integrations (Gemini, Pinecone, Cloudinary)
- **Environment:** Loaded from `backend/.env`
- **Dependencies:** Installed from `backend/package.json`

#### **Video-Seal Service (Watermarking)**
- **Dockerfile:** [video-seal/dockerfile](video-seal/dockerfile)
- **Base Image:** `python:3.10-slim`
- **Container Name:** `videoseal_worker`
- **Port:** 8000 (exposed internally)
- **Purpose:**
  - Video/image watermarking
  - Copyright protection processing
  - AI model inference
  - Returns watermarked media
- **Models Supported:**
  - VideoSeal (256-bit)
  - PixelSeal (imperceptibility optimized)
  - ChunkySeal (high capacity - 1024-bit)
- **Environment:** Loaded from `video-seal/.env`
- **GPU Support:** Optional CUDA acceleration

#### **Redis (Cache & Sessions)**
- **Image:** `redis:alpine`
- **Container Name:** `redis_cache`
- **Port:** 6379 (exposed internally)
- **Purpose:**
  - Session storage (user authentication state)
  - Caching frequently accessed data
  - Rate limiting counters
  - Task queue for background jobs
  - Real-time data structures
- **Default:** Runs with default configuration
- **Persistence:** Optional - can be configured for data persistence

### Container Network

All containers communicate over Docker's internal network bridge. Services can reference each other by container name:

```
Frontend (Browser)
    ↓ HTTP on port 80
[NGINX] → Routes to backend internally (node_backend:5000)
    ↓ Internal Docker network
[Backend Node.js] → Calls external APIs & databases
    ├→ MongoDB (external)
    ├→ Redis (redis_cache:6379)
    ├→ Cloudinary (external)
    └→ [Video-Seal Service] (videoseal_worker:8000)
```

### Docker Compose Configuration

File: [docker-compose.yml](docker-compose.yml)

**Key settings:**
- `expose`: Services only accessible within Docker network
- `ports`: External port mappings to containers
- `volumes`: Mount configuration files as read-only
- `depends_on`: Service startup ordering
- `env_file`: Load environment variables from file
- `restart: unless-stopped`: Auto-restart on failure

### Dockerfile Details

**Backend Dockerfile:**
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

**Video-Seal Dockerfile:**
```dockerfile
FROM python:3.10-slim
WORKDIR /app
RUN apt-get update && apt-get install -y libgl1 libglib2.0-0
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY videoseal/requirements.txt ./videoseal/
RUN pip install --no-cache-dir -r videoseal/requirements.txt
COPY . .
CMD ["python", "watermark_service.py"]
```

---

## Project Architecture

### System Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                      Internet/Client                             │
│                    (Browser, Mobile App)                         │
└────────────────────────────┬─────────────────────────────────────┘
                             │ HTTP/HTTPS
                             ▼
                   ┌─────────────────────┐
                   │  NGINX (Port 80)    │
                   │  Reverse Proxy      │
                   │  Load Balancer      │
                   └────────┬────────────┘
                            │
            ┌───────────────┴──────────────┐
            │                              │
            ▼                              ▼
   ┌──────────────────┐         ┌─────────────────────┐
   │  Frontend (SPA)  │         │  Backend API        │
   │  React + Vite    │         │  Node.js + Express  │
   │  Port 5173       │         │  Port 5000          │
   │  (Dev only)      │         │  node_backend       │
   └──────────────────┘         └────────┬────────────┘
                                         │
                    ┌────────────────────┼────────────────┐
                    │                    │                │
                    ▼                    ▼                ▼
            ┌─────────────┐     ┌────────────────┐   ┌──────────┐
            │  MongoDB    │     │  Cloudinary    │   │  Redis   │
            │  Database   │     │  Media Storage │   │  Cache   │
            │  (External) │     │  (External)    │   │          │
            └─────────────┘     └────────────────┘   └──────────┘
                    │                   │                  │          
                    └───────────────────┼──────────────────┘          
                                        │                          
                    ┌───────────────────┘
                    │
                    ▼
            ┌──────────────────┐
            │ Pinecone         │
            │ (Embeddings)     │
            │ Semantic Search  │
            │ (External)       │
            └──────────────────┘
                    │
                    ▼
            ┌──────────────────┐
            │  Gemini API      │
            │  (AI Analysis)   │
            │  (External)      │
            └──────────────────┘
                    │
                    ▼
            ┌──────────────────┐
            │  Video-Seal      │
            │  Watermarking    │
            │  Service         │
            │  Port 8000       │
            │  videoseal_worker│
            │  (GPU Optional)  │
            └──────────────────┘
```

**Service Communication:**
- Clients connect to NGINX on port 80
- NGINX routes to backend Node.js API (port 5000)
- Backend uses Redis for session caching and rate limiting
- Backend uploads/stores media via Cloudinary
- Backend generates embeddings and sends to Pinecone
- Backend queries Gemini AI for content analysis
- Backend calls Video-Seal service (port 8000) for watermarking

### Data Flow

1. **User uploads media** → Frontend sends to backend
2. **Backend processes** → Stores in Cloudinary, generates embeddings
3. **Embeddings stored** → Pinecone for semantic search
4. **AI analysis** → Gemini API generates metadata
5. **Optional watermarking** → VideoSeal service adds copyright protection
6. **Database storage** → MongoDB stores metadata and relationships
7. **User retrieval** → Frontend queries library with filters

---

## Key Components

### Backend Controllers

**authController.js**
- User registration and login
- OTP verification
- Google OAuth integration
- JWT token management

**assetController.js**
- Fetch public media library
- Search and filter assets
- Generate recommendations
- Fetch asset details

**uploadController.js**
- Handle file uploads
- Generate AI embeddings
- Store in vector database
- Optimize media URLs

**claimController.js**
- Submit copyright claims
- Track claim status
- Evidence management

**userController.js**
- User profile management
- Subscription plans
- User statistics

### Frontend Components

**Layout.jsx**
- Main wrapper with sidebar
- Navigation structure
- User context

**Library.jsx**
- Browse public media
- Search and filter
- Infinite scroll

**Upload.jsx**
- File upload form
- Progress tracking
- Metadata entry

**ClaimCopyright.jsx**
- Copyright claim form
- Evidence upload
- Claim tracking

**Profile.jsx**
- User settings
- Subscription management
- Analytics

---

## API Documentation

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register new user |
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/verify-otp` | Verify OTP |
| POST | `/api/auth/resend-otp` | Resend OTP |
| POST | `/api/auth/google` | Google OAuth login |
| POST | `/api/auth/logout` | User logout |

### Asset Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/assets` | Get library (paginated) |
| GET | `/api/assets/:id` | Get asset details |
| GET | `/api/assets/search` | Search assets |
| GET | `/api/assets/trending` | Get trending content |
| POST | `/api/assets/rate` | Rate an asset |

### Upload Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/upload` | Upload new media |
| GET | `/api/upload/my-media` | Get user uploads |
| DELETE | `/api/upload/:id` | Delete uploaded media |
| PATCH | `/api/upload/:id` | Update media metadata |

### Copyright Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/copyright/claim` | File copyright claim |
| GET | `/api/copyright/claims` | Get user claims |
| GET | `/api/copyright/status/:id` | Check claim status |
| POST | `/api/copyright/evidence` | Submit evidence |

### User Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user/profile` | Get user profile |
| PUT | `/api/user/profile` | Update profile |
| GET | `/api/user/stats` | Get user statistics |
| POST | `/api/user/subscription` | Update subscription |

---

## Database Schema

### User Schema
```javascript
{
  email: String (unique),
  password: String (hashed),
  firstName: String,
  lastName: String,
  profileImage: String,
  subscription_plan: String (Free/Pro/Enterprise),
  two_factor_enabled: Boolean,
  email_verified: Boolean,
  lastLogin: Date,
  googleId: String,
  authMethod: String (email/google),
  timestamps: true
}
```

### Asset Schema
```javascript
{
  title: String,
  description: String,
  type: String (image/video/document),
  url: String (Cloudinary URL),
  thumbnail: String,
  owner: ObjectId (User),
  isPublic: Boolean,
  views: Number,
  likes: Number,
  embedding: Array (Pinecone vector),
  metadata: {
    resolution: String,
    duration: Number,
    size: Number,
    format: String
  },
  tags: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Claim Schema
```javascript
{
  claimant: ObjectId (User),
  contentId: ObjectId (Asset),
  claimType: String,
  description: String,
  evidence: [String],
  status: String (pending/approved/rejected),
  createdAt: Date,
  resolvedAt: Date
}
```

---

## Authentication & Security

### JWT Authentication

All protected endpoints require JWT token in header:

```
Authorization: Bearer <token>
```

### Password Security

- Passwords hashed using bcryptjs (10 salt rounds)
- Never stored in plain text
- Compared during login

### CORS Configuration

Backend allows requests from frontend URL:

```javascript
cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
})
```

### Rate Limiting (Recommended)

Implement rate limiting for production:

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

### Environment Secrets

- Never commit `.env` files
- Use `.env.example` as template
- Store secrets in environment variables
- Use strong, random keys for JWT_SECRET

---

## Real-Time Features

### Current Implementation

The backend provides REST API for all features. For real-time features in future:

**Socket.io Integration (Future)**
```javascript
const io = require('socket.io')(server);

// Real-time notifications
socket.on('claim:status', (data) => {
  // Emit claim status updates
});

// Real-time messaging
socket.on('message:send', (data) => {
  // Broadcast messages
});
```

---

## Video Watermarking

### VideoSeal Integration

The video-seal service provides invisible watermarking for copyright protection:

### Quick Start

```python
import videoseal
from PIL import Image
import torchvision.transforms as T

# Load model
model = videoseal.load("videoseal")

# Watermark image
img_tensor = T.ToTensor()(Image.open("image.jpg")).unsqueeze(0)
outputs = model.embed(img_tensor)
T.ToPILImage()(outputs["imgs_w"][0]).save("watermarked.jpg")

# Detect watermark
detected = model.detect(img_tensor)
```

### Watermark Models

- **VideoSeal** - Balanced 256-bit model
- **PixelSeal** - SOTA imperceptibility
- **ChunkySeal** - High capacity (1024-bit)

---

## Styling & Theme

### Tailwind CSS

The frontend uses Tailwind CSS for styling:

```jsx
<div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
  <h1 className="text-4xl font-bold text-white">Welcome to Streamboat</h1>
</div>
```

### Theme Customization

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
      }
    }
  }
}
```

### Color Scheme

- **Primary:** Blue (#3B82F6)
- **Secondary:** Purple (#8B5CF6)
- **Accent:** Orange (#F97316)
- **Background:** Light gray (#F9FAFB)

---

## Scripts

### Backend Scripts

```bash
npm start              # Start production server
npm run dev           # Start with nodemon
npm test              # Run tests
```

### Frontend Scripts

```bash
npm run dev           # Start development server
npm run build         # Build for production
npm run preview       # Preview production build
npm run lint          # Run ESLint
```

### Utility Scripts

```bash
cd backend
node scripts/embed.js # Generate embeddings for all assets
```

---

## Building for Distribution

### Frontend Build

```bash
cd frontend
npm run build
```

Output in `frontend/dist/` directory. Deploy to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Any static hosting

### Backend Deployment

**Heroku:**
```bash
git push heroku main
```

**AWS EC2:**
```bash
npm install -g pm2
pm2 start index.js
pm2 startup
pm2 save
```

**Docker:**
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5000
CMD ["npm", "start"]
```

### Environment Setup

Ensure all environment variables are set on hosting platform:
- Database credentials
- API keys (Google, Cloudinary, Pinecone)
- JWT secret
- Email credentials

---

## Troubleshooting

### Backend Connection Issues

**Error: MongoDB Connection Failed**
- Verify `MONGODB_URI` in `.env`
- Check network access in MongoDB Atlas
- Ensure IP is whitelisted

**Error: Port 5000 Already in Use**
```bash
# Kill process on port 5000
# On Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# On macOS/Linux:
lsof -i :5000
kill -9 <PID>
```

### Frontend Connection Issues

**Error: Cannot Reach Backend API**
- Verify backend is running
- Check `VITE_API_BASE_URL` in `.env`
- Check browser console for CORS errors
- Ensure backend CORS allows frontend origin

**Error: Google OAuth Not Working**
- Verify `VITE_GOOGLE_CLIENT_ID` is correct
- Check authorized redirect URIs in Google Console
- Ensure localhost:5173 is whitelisted

### Upload Issues

**Error: Cloudinary Upload Failed**
- Verify `CLOUDINARY_*` credentials in `.env`
- Check file size limits
- Ensure Cloudinary account is active

**Error: File Too Large**
- Frontend limit: 100MB (configurable)
- Cloudinary limit: 2GB
- Compress before upload

### Video-Seal Issues

**Error: CUDA Not Available**
- Install NVIDIA drivers
- Install CUDA toolkit
- Install cuDNN

**Error: Model Download Failed**
```bash
# Manually download model
python -c "import videoseal; videoseal.load('videoseal')"
```

### AI/API Issues

**Error: Gemini API Rate Limited**
- Implement exponential backoff
- Cache responses
- Upgrade API tier

**Error: Pinecone Connection Failed**
- Verify API key
- Check network connectivity
- Ensure index exists

### Debug Mode

**Frontend Debug:**
```javascript
// In App.jsx
localStorage.setItem('debug', '*');
```

**Backend Debug:**
```javascript
// Enable all logs
require('dotenv').config();
process.env.DEBUG = '*';
```

---

## Project Practices

### Code Structure
- **Backend:** MVC pattern with routes, controllers, models
- **Frontend:** Component-based with context for state management
- **Separation of concerns:** Business logic separate from UI

### Naming Conventions
- **Backend:** camelCase for files and variables
- **Frontend:** PascalCase for components, camelCase for files
- **Database:** snake_case for field names
- **Environment variables:** UPPER_SNAKE_CASE

### Git Workflow
1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push branch: `git push origin feature/amazing-feature`
4. Create Pull Request
5. Code review and merge

### Testing

```bash
# Backend unit tests
npm test

# Frontend component tests
npm run test

# E2E testing
npm run test:e2e
```

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

MIT License - see LICENSE file for details

---

## Support & Documentation

- **Backend API Docs:** See [backend/README.md](backend/README.md)
- **Frontend Docs:** See [frontend/README.md](frontend/README.md)
- **VideoSeal Docs:** See [video-seal/README.md](video-seal/README.md)
- **Issues:** GitHub Issues
- **Discussions:** GitHub Discussions

---

## Contributors

- Divya Swaroop Jaiswal - https://github.com/raj-jaiswal
- Shivam Prakash - https://github.com/Phoenix1729398
- Piyush Sinha - https://github.com/piyush2180
---

## Acknowledgments

- Cloudinary for media hosting
- Google Cloud for AI services
- Pinecone for vector database
- Meta Research for VideoSeal

---

## Related Resources

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [VideoSeal Repository](https://github.com/facebookresearch/videoseal)
- [Vite Documentation](https://vitejs.dev/)

---

**Last Updated:** April 2026
**Project Version:** 1.0.0

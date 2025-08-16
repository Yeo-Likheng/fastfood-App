#!/bin/bash
set -e

echo "Starting build process..."

# Install backend dependencies
echo "Installing backend dependencies..."
cd backend
npm install
cd ..

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend
npm install
echo "Frontend dependencies installed successfully"

# Build frontend
echo "Building frontend..."
npm run build
echo "Frontend build completed"

# Copy built frontend to backend directory for serving
echo "Copying built frontend to backend..."
cp -r dist ../backend/
echo "Build process completed successfully"

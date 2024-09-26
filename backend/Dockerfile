# Backend Dockerfile
FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Rebuild bcrypt specifically for the Docker environment
RUN npm rebuild bcrypt --build-from-source

# Copy the source code
COPY ./src /app/src

# Expose the backend port
EXPOSE 5000

# Start the backend
CMD ["node", "src/app.js"]

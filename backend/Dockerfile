# Backend Dockerfile
FROM node:18

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY ./src /app/src

# Expose the backend port
EXPOSE 5000

# Start the backend
CMD ["node", "src/app.js"]

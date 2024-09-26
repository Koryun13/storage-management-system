# Frontend Dockerfile
FROM node:18

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the React app
COPY ./src /app/src

# Expose the frontend port
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]

# Stage 1: Build app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build app
RUN npm run build

# Stage 2: Serve built app using Nginx
FROM nginx:alpine

# Copy built app from previous stage
COPY --from=build /app/.next /usr/share/nginx/html

# Copy custom nginx configuration
COPY default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Command to start Nginx when container starts
CMD ["nginx", "-g", "daemon off;"]
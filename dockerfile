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

# Use a lightweight image for serving the built application
FROM node:18-alpine AS production

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=base /app/package*.json ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 3000

# Command to run the Next.js application in production mode
CMD ["npm", "run", "start"]
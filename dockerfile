# 1. Use the official Node.js image as the base image
FROM node:18-alpine AS builder

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./
# If you're using yarn, use this instead:
# COPY yarn.lock ./

# 4. Install dependencies
RUN npm install
# If using yarn:
# RUN yarn install

# 5. Copy the rest of the application code to the working directory
COPY . .

# 6. Build the Next.js app
RUN npm run build
# If using yarn:
# RUN yarn build

# --- STAGE 2: Production stage ---

# 7. Use a smaller base image for production
FROM node:18-alpine

# 8. Set the working directory inside the container
WORKDIR /app

# 9. Copy the built files and node_modules from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# 10. Expose the port that your app will run on (typically 3000 for Next.js)
EXPOSE 3000

# 11. Set environment variables if needed (e.g., production mode)
ENV NODE_ENV production

# 12. Start the Next.js app
CMD ["npm", "start"]

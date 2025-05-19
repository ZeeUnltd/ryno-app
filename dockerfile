FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm install -g next
RUN npm run build
EXPOSE 3000
CMD ["next", "start", "-p", "3000"]

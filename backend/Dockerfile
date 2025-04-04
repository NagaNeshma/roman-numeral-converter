FROM node:18
WORKDIR /app

# Copy package files and install everything
COPY package*.json ./
RUN npm install  
# <- installs both regular & dev dependencies

# Copy source code and build
COPY . .
RUN npm run build

EXPOSE 8080
CMD ["node", "dist/index.js"]
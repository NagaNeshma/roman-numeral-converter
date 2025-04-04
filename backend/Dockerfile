FROM node:18
WORKDIR /app

# Copy package files and install everything
COPY package*.json ./
RUN npm install  
# <- installs both regular & dev dependencies
# Install tsc globally to avoid permission issues
RUN npm install -g typescript
# Copy source code and build
COPY . .
RUN npm run build
# Expose port
EXPOSE 8080
CMD ["node", "dist/index.js"]
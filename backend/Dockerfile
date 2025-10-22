# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy rest of the code
COPY . .

# Expose port (internal)
EXPOSE 5000

# Start app
CMD ["node", "app.js"]

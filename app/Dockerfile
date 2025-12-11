FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies (only production deps)
COPY package*.json ./
RUN npm install --production

# Copy application source
COPY src ./src

# App will read correct .env.* at runtime, not bake secrets into image
EXPOSE 3000

# Default start command, will use NODE_ENV passed during runtime
CMD ["node", "src/index.js"]

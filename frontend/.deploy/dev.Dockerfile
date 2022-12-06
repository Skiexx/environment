FROM node:19-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN apk add npm
RUN npm install

# Copy app source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start app
CMD [ "npm", "run", "start" ]
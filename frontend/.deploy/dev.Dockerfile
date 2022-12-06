FROM node:19-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN apk add npm
RUN npm install -g npm
RUN npm install --force

# Copy app source code
COPY . .

# Expose port 3000
ARG FRONTEND_PORT
EXPOSE $FRONTEND_PORT

# Start app
CMD [ "npm", "run", "serve" ]
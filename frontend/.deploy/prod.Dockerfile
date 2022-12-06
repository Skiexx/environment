FROM node:19-alpine as build-stage

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN apk add npm
RUN npm ci --only=production

# Copy app source code
COPY . .

# Build app
RUN npm run build

FROM nginx:1.19-alpine

# Install app dependencies
RUN apk add npm

# Copy app source code
COPY --from=build-stage /app/build/ /usr/share/app/html
WORKDIR /usr/share/app/html

# Expose port 3000
EXPOSE 3000

# Start app
CMD [ "npm" , "run" , "serve" ]

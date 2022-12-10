FROM node:19-alpine as build-stage

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN apk add npm
RUN npm install --force

# Copy app source code
COPY . .

# Build app
RUN npm run build

FROM nginx:1.23-alpine as production-stage
COPY .deploy/nginx/default.conf /etc/nginx/conf.d/default.conf

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy build files
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start app
CMD [ "nginx", "-g", "daemon off;" ]
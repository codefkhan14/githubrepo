# Use an official Node.js LTS (Long Term Support) image as the base image
FROM node:22

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Install nodemon globally (for development)
RUN npm install -g nodemon

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the Node.js application will run
EXPOSE 3000

# Use nodemon to start the application
CMD ["nodemon", "server.js"]

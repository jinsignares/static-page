# Use an official Node runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install any needed packages specified in package.json
RUN npm install

# Make port 1234 available to the world outside this container
EXPOSE 1234

# Define environment variable
ENV NODE_ENV=development

# Run npm start command when the container launches
CMD ["npm", "start"]

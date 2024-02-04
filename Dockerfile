# Our Node base image
FROM node:20-slim
# Set the Node environment to development to ensure all packages are installed
ENV NODE_ENV development
# Change our current working directory
WORKDIR /usr/src/app
# Copy over `package.json` and lock files to optimize the build process
COPY package*.json ./
# Copy over rest of the project files
COPY . .
# Install Node modules
RUN npm install
# Expose port 3000 for the SvelteKit app and 24678 for Vite's HMR
EXPOSE 5173
#EXPOSE 24678
# Run `yarn dev` and set the host to 0.0.0.0 so we can access the web app from outside
ENTRYPOINT ["npm", "run", "dev", "--host", "0.0.0.0"]

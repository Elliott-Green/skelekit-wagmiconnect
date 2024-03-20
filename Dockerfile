# Our Node base image
FROM node:18.13-alpine as build

# Create a directory for the Sveltekit client
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml to image
COPY package.json pnpm-lock.yaml svelte.config.js ./

# need basic python for pnpm, alpine is very smoll
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

# Install dependencies
RUN npm i -g pnpm
RUN pnpm i

# Copy the rest of the client files
WORKDIR /usr/src/app
COPY . .

# Build the client
RUN npm run build

ENV BUILD_DATE = `date -u +"%Y-%m-%dT%H:%M:%SZ"`

# Expose the port that the client will be served on
EXPOSE 5173

# Start the client from the build
CMD [ "npm", "run", "dev" ]

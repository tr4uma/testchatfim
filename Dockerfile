FROM node:12.11.0-alpine

COPY ./src /app

# make app directory as the working directory.
WORKDIR /app

# Install dependencies.
RUN npm install -only=production

EXPOSE $PORT

# Start the process
CMD ["./node_modules/http-server/bin/http-server", "./"]
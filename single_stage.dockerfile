FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx tsc
RUN adduser -D --no-create-home user
USER user
CMD node build/index.js
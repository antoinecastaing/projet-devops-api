FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx tsc

FROM node:16-alpine as final
WORKDIR /app
RUN adduser -D --no-create-home user
COPY --from=builder ./app/build ./build
COPY package*.json ./
RUN npm install
USER user
CMD node build/index.js
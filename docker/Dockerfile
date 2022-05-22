FROM node:18 as builder
WORKDIR /code

COPY package.json .
RUN npm install
COPY . .
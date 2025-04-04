FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
FROM node:18
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/build ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
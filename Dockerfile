
# Setup and build the client

FROM node:9.4.0-alpine as client

WORKDIR /usr/app/frontend/
COPY frontend/package*.json ./
RUN npm install -qy
COPY frontend/ ./
RUN npm run build

# Setup the server

FROM node:9.4.0-alpine

WORKDIR /usr/app/
COPY --from=frontend /usr/app/frontend/build/ ./frontend/build/

WORKDIR /usr/app/backend/
COPY backend/package*.json ./
RUN npm install -qy
COPY backend/ ./

ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]



# COPY built files. These must exist

FROM node:9.4.0-alpine

WORKDIR /usr/app/
COPY  ./frontend/static/ ./frontend/build/

WORKDIR /usr/app/backend/
COPY backend/package*.json ./
RUN yarn install
COPY backend/ ./

ENV PORT 3000

EXPOSE 3000

CMD ["yarn", "start"]

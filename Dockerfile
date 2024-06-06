# Builder Stage
FROM node:alpine as builder
WORKDIR /app/
ENV NODE_OPTIONS=--max_old_space_size=4048
COPY . .
ARG BASE_PATH
ENV BASE_PATH=$BASE_PATH 
RUN yarn install --save
RUN yarn build

# Runner Stage
FROM node:alpine as runner
WORKDIR /app
ENV TZ="Asia/Jakarta" 
COPY --from=builder /app/ /app/

# Endpoint
CMD [ "yarn", "start" ]

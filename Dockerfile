FROM node:19-alpine

# set working directory
WORKDIR /emoji

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]

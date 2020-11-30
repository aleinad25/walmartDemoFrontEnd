#first step
FROM node:alpine
ENV CI=true
WORKDIR /app
#second step
COPY ./package.json ./
RUN npm install
COPY ./ ./
#third step
CMD [ "npm","start" ]
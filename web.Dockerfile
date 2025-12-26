FROM node:latest
workdir application_form
COPY package.json .
RUN npm install
EXPOSE 5000
COPY . .
CMD ["npm","run","dev"]
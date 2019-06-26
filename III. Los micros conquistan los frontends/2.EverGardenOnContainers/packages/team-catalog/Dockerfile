FROM node:11

# Create app directory
RUN mkdir -p /code
WORKDIR /code

# Install app dependencies
COPY package.json /code/
RUN npm install
COPY webpack.config.js /code/

# Bundle app source
COPY ./back /code/back
COPY ./front /code/front
RUN ls -R ./back

EXPOSE 3002
CMD [ "./node_modules/.bin/nodemon", "--watch", "./back", "--exec", "npm", "start" ]
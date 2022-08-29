# docker-compose-nodejs-example-with-typescript

This is Software Engineer task "Part of Speech"

Built in Angular and Nodejs

## To run the app on your dev pc:


Clone or download this repo, open a command line, change to the repo directory, then install dependencies and build:

    cd web-app
    npm install
    npm run build

Then run the server:

    npm start

You can also run it using tsc and nodemon for live reload:

    npm run watch && npm run start

Now navigate your browser to http://127.0.0.1:3000/ to view the app.

To view the REST API navigate your browser to 
http://127.0.0.1:3000/api/words
http://127.0.0.1:3000/api/rank
http://127.0.0.1:3000/api/pos

## Running with Docker-Compose

Run Docker Compose:

    sudo docker-compose up --build

You can also add a -d parameter to start Docker-Compose in dettached mode.



## To shell into a docker container

For a particular container run:

    sudo docker exec -it <container-name> bash

For example, the db container:

    sudo docker exec -it db bash


## View logs from containers

    sudo docker-compose logs

## Resources

https://medium.freecodecamp.org/the-ups-and-downs-of-docker-compose-how-to-run-multi-container-applications-bf7a8e33017e
https://developer.okta.com/blog/2017/10/11/developers-guide-to-docker-part-3


https://github.com/ashleydavis/docker-compose-nodejs-with-typescript-example

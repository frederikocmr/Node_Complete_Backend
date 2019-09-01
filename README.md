# iNails App made with NodeJS

A WORK IN PROGRESS for a complete Node back-end of the iNails app.

Featuring Express.JS, Sequelize with PostgresSQL, Mongoose with MongoDB, Reidis with Bee-Queue, Multer, Handlebars, JWT, Sentry, BCryptJS and Yup.

Integrated with Nodemon, Prettier, Sequelize CLI, ESLint and Sucrase for development dependencies.

## Starting the application

Installing all the dependencies:

> yarn install

Starting the application:

> yarn dev

Starting background jobs:

> yarn queue

## Docker Containers:

CONTAINER ID--------IMAGE---------------PORTS----------------------NAMES

a1a25a539798--------redis:alpine--------0.0.0.0:6379->6379/tcp-----database_redis

57490d309472--------mongo------------0.0.0.0:27017->27017/tcp---database_mongo

54de8a44ace9--------postgres-----------0.0.0.0:5432->5432/tcp------database

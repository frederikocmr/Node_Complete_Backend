# iNails App made with NodeJS

A WORK IN PROGRESS for a complete Node back-end of the iNails app featuring Express.JS, Sequelize with PostgresSQL, Mongoose with MongoDB, Multer, JWT, BCryptJS and Yup. Integrated with Nodemon, Prettier, ESLint and Sucrase for dev. dependencies.

## Docker Containers:

CONTAINER ID--------IMAGE---------------PORTS----------------------NAMES
a1a25a539798--------redis:alpine--------0.0.0.0:6379->6379/tcp-----database_redis
57490d309472--------mongo---------------0.0.0.0:27017->27017/tcp---database_mongo
54de8a44ace9--------postgres------------0.0.0.0:5432->5432/tcp-----database

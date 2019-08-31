module.exports = {
  postgresConfig: {
    dialect: 'postgres',
    host: '192.168.99.100',
    username: 'postgres',
    password: 'docker',
    database: 'gobarber',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  mongoConfig: 'mongodb://192.168.99.100:27017/gobarber',
};

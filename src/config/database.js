const base_url = '192.168.99.100';

module.exports = {
  postgresConfig: {
    dialect: 'postgres',
    host: base_url,
    username: 'postgres',
    password: 'docker',
    database: 'iNails',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  mongoConfig: `mongodb://${base_url}:27017/iNails`,
  redisConfig: {
    host: base_url,
    port: 6379,
  },
};

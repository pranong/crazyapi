// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  // development: {
  //   client: "mysql",
  //   connection: {
  //     host: "127.0.0.1",
  //     port: 3306,
  //     user: "your_database_user",
  //     password: "your_database_password",
  //     database: "myapp_test",
  //   },
  // },

  development: {
    client: "mysql",
    connection: {
      host: "192.168.64.2",
      port: 3306,
      user: "pnkrwk",
      password: "023944571",
      database: "new_schema",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password",
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //   },
  // },
};

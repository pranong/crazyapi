// Update with your config settings.
const util = require('./util')

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

  dev: {
    client: 'mysql',
    connection: {
      host: '192.168.64.2',
      port: 3306,
      user: 'pnkrwk',
      password: '023944571',
      database: 'new_schema',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  office: {
    client: 'mysql',
    connection: {
      host: '10.0.2.150',
      port: '33060',
      user: 'basket',
      password: 'basket@1234',
      database: 'basket_delivery',
      supportBigNumber: true,
      timezone: '+7:00',
      dateStrings: true,
      charset: 'utf8mb4_unicode_ci',
    },
    debug: true,

    postProcessResponse(result) {
      if (result instanceof Array) {
        if (result.length === 0) {
          return []
        }
        // insert result
        if (typeof result[0] === 'number') {
          return result[0]
        }
        // raw result
        if (result.length === 2 && result[0] instanceof Array) {
          return result[0].map(util.snakeToCamel)
        }
        // normal result
        return result.map(util.snakeToCamel)
      } else {
        return util.snakeToCamel(result)
      }
    },
    wrapIdentifier(value) {
      if (value === '*') {
        return value
      }
      return '`' + util.camelToSnake(value) + '`'
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
}

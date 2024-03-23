// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql', // Tuve un pequeño error en el que el cliente puse Postgress en lugar de postgrees (la mayuscula)
    connection: {
      host: '127.0.0.1',
      database: 'knexapiMAR24',
      user: 'postgres',
      password: 'admin123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seed: {
      directory: './data/seeds'
    }
    // Configuracion del directorio de seeds, donde se van a crear datos para llenar las tablas, para
    // crear los archivos de semilla en la terminal se coloca el comando:
    // knex seed:make 01-homes SEGUIDO DEL NOMBRE DE UN ARCHIVO (en este caso: 01-homes)
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}

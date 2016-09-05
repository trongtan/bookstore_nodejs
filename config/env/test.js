module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/
  connections: {
    testPostgresqlServer: {
      adapter: 'sails-memory'
    }
  },

 models: {
    connection: 'testPostgresqlServer',
    migrate: 'drop'
  },

  port: 4000,

  log: {
      level: 'error'
  },
};

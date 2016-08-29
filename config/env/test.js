module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/
  connection: {
    test: {
      adapter: 'sails-memory'
    },
  },

 models: {
    connection: 'test',
    migrate: 'drop'
  },

  port: 3000,

  log: {
      level: 'error'
  },
};
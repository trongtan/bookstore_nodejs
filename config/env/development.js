/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

require('dotenv').config();

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/
  connections: {
    developmentPostgresqlServer: {
      adapter: 'sails-postgresql',
      host: process.env.DB_HOST,
      user: process.env.DB_USER, 
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    }
  },

 models: {
    connection: 'developmentPostgresqlServer',
    migrate: 'alter'
  },

  port: 3000,
};

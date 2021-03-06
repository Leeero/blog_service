/* eslint valid-jsdoc: "off" */
'use strict';
/**
 \* @param *{Egg.EggAppInfo}* *appInfo* app info
 */
module.exports = (appInfo) => {
  /**
   \* built-in config
   \* @type *{Egg.EggAppConfig}*
   **/
  const config = (exports = {});
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1606557579995_1588';
  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.mysql = {
    // database configuration

    client: {
      // host
      host: '127.0.0.1',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '605140',
      // database
      database: 'blog',
    },

    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  // add your user config here

  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

'use strict';

module.exports = (config) => {
  if (process.env.MXD_APPDYNAMICS) {
    config.appdynamics = JSON.parse(process.env.MXD_APPDYNAMICS);
  }

  if (config.appdynamics) {
    require('appdynamics').profile(config.appdynamics);
  }
};

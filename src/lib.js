'use strict';

module.exports = (config) => {
  if (process.env.MXD_APPDYNAMICS) {
    config.appdynamics = { profile: JSON.parse(process.env.MXD_APPDYNAMICS) };
  }

  if (config.appdynamics && config.appdynamics.profile) {
    require('appdynamics').profile(config.appdynamics.profile);
  }
};

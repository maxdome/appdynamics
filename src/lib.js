'use strict';

module.exports = (config) => {
  if (process.env.MXD_APPDYNAMICS) {
    config.appdynamics = {
      active: process.env.MXD_APPDYNAMICS_ACTIVE,
      profile: JSON.parse(process.env.MXD_APPDYNAMICS_PROFILE)
    };
  }

  if (config.appdynamics &&
      config.appdynamics.active &&
      config.appdynamics.profile) {
    require('appdynamics').profile(config.appdynamics.profile);
  }
};

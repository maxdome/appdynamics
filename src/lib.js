'use strict';

module.exports = (config) => { // TODO: It would be nice to inject the logger here
  if (process.env.MXD_APPDYNAMICS) {
    config.appdynamics = {
      active: process.env.MXD_APPDYNAMICS_ACTIVE,
      profile: JSON.parse(process.env.MXD_APPDYNAMICS_PROFILE)
    };
  }

  if (config.appdynamics && config.appdynamics.active && config.appdynamics.profile) {
    try {
      console.log('Enable appdynamics', config.appdynamics.profile); // TODO: It would be nicer to log through an injected logger
      require('appdynamics').profile(config.appdynamics.profile);
    } catch (err) {
      console.log('appdynamics config error', err); // TODO: It would be nicer to log through an injected logger
    }
  }
};

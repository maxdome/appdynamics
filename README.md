# example

```
require('mxd-appdynamics')(config);
```


# config

Available attributes for the profile, see: https://docs.appdynamics.com/display/PRO39/Install+the+Node.js+Agent

## environment variables

If environment variables are set, the config object will be ignored!

* MXD_APPDYNAMICS_ACTIVE: enable/disable Node.js Agent
* MXD_APPDYNAMICS_PROFILE: JSON encoded profile configuration

## config object

```
{
  "appdynamics": {
    "active": true,
    "profile": {}
  }
}
```

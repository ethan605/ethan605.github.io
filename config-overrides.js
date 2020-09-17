/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-var-requires */
const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env);
  return config;
};

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        customKey: 'my-dev-value',
      },
    };
  }

  return {
    env: {
      customKey: 'my-prod-value',
    },
  };
};

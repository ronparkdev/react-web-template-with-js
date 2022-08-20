const path = require('path');

exports.resolveAlias = ['assets', 'components', 'pages', 'services']
  .reduce((map, directoryName) => ({
    ...map,
    [directoryName]: path.resolve(__dirname, `src/${directoryName}`),
  }), {})

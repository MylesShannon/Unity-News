'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'test',
  api: 'http://localhost:8002',
  redirect: 'http://localhost:8080'
};

export default Object.freeze(Object.assign(baseConfig, config));

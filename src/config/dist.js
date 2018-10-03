'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dist',
  api: 'http://api.mylesshannon.me',
  redirect: 'http://news.mylesshannon.me'
};

export default Object.freeze(Object.assign({}, baseConfig, config));

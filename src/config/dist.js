'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dist',
  api: 'https://api.mylesshannon.me',
  redirect: 'https://news.mylesshannon.me'
};

export default Object.freeze(Object.assign({}, baseConfig, config));

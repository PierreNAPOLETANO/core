'use strict'

module.exports = process.env.NODE_ENV === 'production' ? require('./dist/runtime-dom.cjs.prod.js') : require('./dist/runtime-dom.cjs.js');

'use strict'

module.exports = process.env.NODE_ENV === 'production' ? require('./dist/reactivity.cjs.prod.js') : require('./dist/reactivity.cjs.js')

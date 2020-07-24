const { model } = require('mongoose');

//keys.js -- figure out what set of credential to return 
if (process.env.NODE_ENV === 'production') {
    // We are in the production
    module.exports = require('./prod');
} else {
    // We are in the development.
    module.exports = require('./dev');
}
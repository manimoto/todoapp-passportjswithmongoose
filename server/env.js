var path = require('path'),
rootPath = path.normalize(__dirname);


module.exports = {
development: {
    rootPath : rootPath,
    db: 'mongodb://localhost/todoapp',
    port: process.env.PORT || 4000
},
production: {}
};
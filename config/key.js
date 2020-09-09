if(process.env.NODE_ENV === 'production')
{
    module.exports = require('./prod');
} else { // development: local
    module.exports = require('./dev');
}
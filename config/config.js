// check environment 
var env = process.env.NODE_ENV || 'development' ;

//fetch data from config.json
var config = require('./config.json')

var envConfig = config[env]

// add env. configuation value to process.ENV
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key])

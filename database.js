const mysql = require('mysql2')

const homeFinderConnectionInfo = {
    host: 'mysql',
    user: 'root',
    password: 'example',
    database: 'homefinder'
}
const homeFinderPool = mysql.createPool(homeFinderConnectionInfo)
const homeFinderPoolPromise = homeFinderPool.promise()

module.exports = {homeFinderPoolPromise}
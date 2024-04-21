const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    password:'515340ww',
    host:'localhost',
    port:5432,
    database:"startapDate"
})
pool.connect();
module.exports = pool
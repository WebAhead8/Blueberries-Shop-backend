const path = require('path')
const db = require(path.join(__dirname, '..', 'database', 'connection'))

function addUser(user){
    return db.query(`INSERT INTO `)
}
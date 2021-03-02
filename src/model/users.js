const { get } = require('http');
const path = require('path')
const db = require(path.join(__dirname, '..', 'database', 'connection'))

function addUser(user) {
    const userData = [user.email, user.firstName, user.lastName, user.phoneNumber, user.password, user.type];
    return db.query(`INSERT INTO users (email,firstname,lastname,phoneNumber,password,type) values ($1,$2,$3,$4,$5,$6) returning *`, userData)
        .then(result => {
            return result.rows[0];
        })
}

function getUser(email, password) {
    const userDetails = [email, password];

    return db.query(`SELECT * FROM users WHERE email =$1 AND password=$2`, userDetails)
        .then(result => {
            return result.rows[0];
        })

}

function getUserById(userID) {

    return db.query(`SELECT * FROM users WHERE ID =$1`, [userID])
        .then(result => {
            return result.rows[0];
        })


}

// getUserById(2).then(data=>console.log(data));

//getUser("ave.brhom@gmail.com","123123").then(result=>console.log(result))


function addComment(data) {
    const comment = [data.name, data.email, data.phoneNumber, data.comment];

    return db.query(`INSERT INTO comments(name,email,phoneNumber,comment) VALUES ($1,$2,$3,$4) returning *`, comment)
        .then(result => {
            return result.rows[0];
        })
}

function getAllComments() {
    return db.query(`SELECT * from comments`).then(result => {
        return result.rows
    })
}

function addClient(user) {

    const data = [user.email, user.firstName, user.lastName, user.phoneNumber, user.password, "client"];
    return db.query(`INSERT INTO users(email,firstName,lastName,phoneNumber,password,type) VALUES($1,$2,$3,$4,$5,$6) returning *`, data).then(result => {
        return result.rows
    });
}

function addAdmin(user) {
    const data = [user.email, user.firstName, user.lastName, user.phoneNumber, user.password, "admin"];
    return db.query(`INSERT INTO users(email,firstName,lastName,phoneNumber,password,type) VALUES($1,$2,$3,$4,$5,$6) returning *`, data).then(result => {
        return result.rows
    });
}

module.exports = { addUser, getUser, getUserById, addComment, getAllComments, addClient, addAdmin }
//{"name":"lsdjfn","description":";sdfjlsdkfj","image":"laskd","price":"5","quantity":"100","category":"kjsadf"}
//  addUser({email:"stamm@gmail.com",firstName:"Ebraheem",lastName:"Ghantous",phoneNumber:"0527812946",password:"123123",type:"client"}).then(data=>console.log(data))
// .then(result=>{console.log(result)});
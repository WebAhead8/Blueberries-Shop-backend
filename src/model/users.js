const { get } = require('http');
const path = require('path')
const db = require(path.join(__dirname, '..', 'database', 'connection'))

function addUser(user){
    const userData=[user.email,user.firstName,user.lastName,user.phoneNumber,user.password,user.type];
    return db.query(`INSERT INTO users (email,firstname,lastname,phoneNumber,password,type) values ($1,$2,$3,$4,$5,$6) returning *`,userData)
    .then(result=>{
        return result.rows[0];
    })
}

function getUser(email,password)
{
    const userDetails=[email,password];

    return db.query(`SELECT * FROM users WHERE email =$1 AND password=$2`,userDetails)
    .then(result=>{
        return result.rows[0];
    })
    
}

//getUser("ave.brhom@gmail.com","123123").then(result=>console.log(result))

module.exports={addUser,getUser}

// addUser({email:"ave.brhom@gmail.com",firstName:"Ebraheem",lastName:"Ghantous",phoneNumber:"0527812946",password:"123123",type:"admin"})
// .then(result=>{console.log(result)});
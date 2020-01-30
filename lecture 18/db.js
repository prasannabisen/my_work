const Sequelize=require('sequelize')

const db=new Sequelize({
    dialect:'sqlite',
    storage:'./kk.sqlite3'
})

const Users=db.define('user',{
    name:{
        type:Sequelize.STRING
    }
})

Users.sync().then(()=>{
    console.log("it is created")
})
module.exports={
    db,
    Users,
}
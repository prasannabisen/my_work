const Sequelize=require('sequelize').

const db=new Sequelize({
    dialect:"sqlite3",
    storage:"user.db"
})
const user=db.define({
    userId:{
        type:Sequelize.String,
    },
    id:{
        type:Sequelize.String
        },
    password:
    {
        type:Sequelize.String
    }
})

module.exports={
    db,user
}
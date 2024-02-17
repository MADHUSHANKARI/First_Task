const mongoose = require('mongoose');


const DbConnection = ()=>{

    mongoose.connect(process.env.Db_Uri)
    .then((con)=>console.log(`MongoDB is connected to the host :${con.connection.host}`))
    .catch((err)=>{
        console.log(err)
    })

}

module.exports = DbConnection   
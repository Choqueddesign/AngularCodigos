const mongoose = require ('mongoose');
const svr = 'mongodb+srv://choquedanart:2626710@mongolearn.cxavf.mongodb.net/superPrestamitosSAS';

const connectDB = async() =>{
    try{
        await mongoose.connect(svr).then(()=>{
            console.log("Base de datos conectada")
        }, (err) =>{
            console.log("no se conecto base de datos "+ err)
        })
    }catch(err){
        console.log(err.message)
    }
}

module.exports = {
    connectDB,
}
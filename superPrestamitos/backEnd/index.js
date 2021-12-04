const express = require("express");
const cors = require("cors")
const {connectDB} = require("../backEnd/mongoDB/db");
const appPrestamitos = express();
const { prestamitosPeticiones } = require("./routers/prestamos");
connectDB();

appPrestamitos.use(express.json());
appPrestamitos.use(cors());
//app.use('/prestamos');
appPrestamitos.use('/prestamos',prestamitosPeticiones)

let puerto = 2626;
appPrestamitos.get('/',(req,res)=>{
    console.log("GET sale")
    res.send("Hola desde get app")
})

appPrestamitos.listen(puerto,()=>{
    console.log("Estoy escuchando el puerto " + puerto)
});
const { type } = require('os')
const {prestamitosPeticiones} = require ('../routers/prestamos')

const guardarInfo = (req,res) =>{
    console.log("POST work")
    res.send("hola desde POST Controller")
    /*prestamitosPeticiones.updateOne({"nombre": type=String, "identificación": type=Number, "correo": type=String, "status": type=String ,"salario": type=Number, "antiguedad": type=Number }, req.prestamitosPeticiones,( err, mongoResponse) =>{
        if(err) return res.send(err)
        console.log(mongoResponse)
        return mongoResponse.modifiedCount == 1 ? res.send("Documento actualizado") : res.send("No se actualizó el documento")
    });*/

}

const traerInfo = (req,res) =>{
    console.log("GET work")
    res.send("hola desde get controller")
    mensaje = "Usted no es apto para un prestamo"
    prestamitosPeticiones.find({"status":"Desempleado"},(err, mensaje)=>{
        console.log("busque")
        if(err) return res.send(err)
        return res.send(mensaje)
        
    })/*)else {
        antiguedadMinima == 3;
        prestamitosPeticiones.find({"status":"Independiente"}(err,({"antiguedad":(>=(12*antiguedadMinima))}))=>{
            if()
        })

    }*/
} 

//Si es independiente, entonces evaluamos la antigüedad y si esta supera 3 años acto seguido va a consultar su puntaje en las centrales de riesgo

module.exports ={
    traerInfo,
    guardarInfo,
}
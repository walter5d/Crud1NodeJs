import Express  from "express";
import { conectar } from "./modelo/db_conectar.js";
const app_e = Express();
app_e.use(Express.static('./vista'))
app_e.use(Express.static('./controlador'))
app_e.use(Express.static('./modelo'))
app_e.listen('5000',function(){
console.log('Aplicacion iniciada en: http://localhost:5000/ ')
})

app_e.get('/',function(req,res){
    res.send("Hola mundo")
})

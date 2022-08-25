import mysql from 'mysql'
var conectar = mysql.createConnection({
host:'localhost',
user :'usr_empresa',
password: 'empresa123*9',
datebase: 'dbempresa'
});
conectar.connect( function(err){
if(err){
    console.error('error en la conexion' + err.stack)
    return; 
}
console.log('conexion exitosa ID: ' + conectar.threadId);
});

export{conectar}

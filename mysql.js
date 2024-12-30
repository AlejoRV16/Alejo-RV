const mysql = require('mysql')

const conection = mysql.createConnection({
    host:'blwnpb42srqwmhxrayxl-mysql.services.clever-cloud.com',
    user:'u0k5xbhi8eiicvim',
    password:'RDcubugH3h3ODzd1V2gC',
    database:'blwnpb42srqwmhxrayxl',
})

conection.connect((err) => {
    if (err) throw err
    console.log('la conexion funciona')
})

conection.query('SELECT * from users',(err,rows) =>{
    if (err) throw err
    console.log('los datos de la tabla son estos: ')
    console.log(rows)

})





module.exports = conection;// Exportamos la conexión para usarla en otros archivos



























//  const insertar ="INSERT INTO `users`(`ID`, `NOMBRE`) VALUES ('null','Nicol')"

// conection.query(insertar,(err, rows)=>{
//     if (err) throw err
// })

// const borrar = "DELETE FROM `users` WHERE ID = 8;"
// conection.query(borrar,(err, rows)=>{
//     if (err) throw err
// })

// const Actualizar = "UPDATE `users` SET `NOMBRE`='David' WHERE ID = 10;"
// conection.query(Actualizar,(err, rows)=>{
//     if (err) throw err
// })



// conection.query('SELECT * from users',(err,rows) =>{
//     if (err) throw err
//     console.log('los datos de la tabla son estos: ')
//     console.log(rows)
//     console.log(rows[1])
    
//     console.log('la cantidad de usuarios que hay en total son : ')
    
//     console.log(rows.length)

// })

// conection.query('SELECT * FROM users', (err,rows)=>{
//     if (err) throw err
//     console.log(rows)


// })



// conection.end()





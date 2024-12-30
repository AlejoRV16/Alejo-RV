const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión con MySQL
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.message);
        process.exit(1);
    }
    console.log('Conectado a la base de datos');
});

// Ruta para guardar datos
app.post('/guardar', (req, res) => {
    const { NOMBRE, APELLIDO, CORREO, CLAVE } = req.body;
    const query = "INSERT INTO users (NOMBRE, APELLIDO, CORREO, CLAVE) VALUES (?, ?, ?, ?)";

    connection.query(query, [NOMBRE, APELLIDO, CORREO, CLAVE], (err) => {
        if (err) {
            console.error("Error al guardar en la base de datos:", err);
            res.status(500).send("Error al guardar en la base de datos");
        } else {
            res.send("Todo se guardó correctamente");
        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

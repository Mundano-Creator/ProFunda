const express = require('express');
const { MongoClient } = require('mongodb');

const router = express.Router();

// Ruta para registrar un usuario
router.post('/register', async (req, res) => {
  const { fullName, email, password, role, phone } = req.body;

  try {
    // Conectar con la base de datos
    const client = new MongoClient(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    const db = client.db(); // Base de datos por defecto
    const usersCollection = db.collection('users');

    // Verificar si el usuario ya existe
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    // Crear el nuevo usuario
    const newUser = {
      fullName,
      email,
      password,
      role,
      phone,
    };

    // Insertar el nuevo usuario
    await usersCollection.insertOne(newUser);

    res.status(201).json({ message: 'Usuario registrado exitosamente' });

    // Cerrar la conexión
    client.close();
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
});

module.exports = router;

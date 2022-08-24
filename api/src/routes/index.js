const { Router } = require('express');
const Videogame = require('./Videogames.routes');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


router.use('/videogames',Videogame)



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

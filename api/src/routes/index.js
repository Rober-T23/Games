const { Router } = require('express');
const Videogame = require('./Videogames.routes');

const router = Router();

router.use('/videogames',Videogame)


module.exports = router;

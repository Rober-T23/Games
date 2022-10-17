const { Router } = require('express');
const { Videogame, Generos } = require('../db');
const { getDbinfo } = require('../controller/gamesApi')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.get('/allGames', async (req, res) => {
    const name = req.query.name;
    let dataVideos = await getDbinfo();
    if (name) {
        let gamesName = await dataVideos.filter((el) =>
            el.name.toLowerCase().includes(name.toString().toLowerCase())
        );
        gamesName.length
            ? res.status(200).send(gamesName)
            : res
                .status(404)
                .send(
                    'No existe video juegos que contenga ese Nombre: ' + name.toLowerCase()
                );
    } else {
        res.status(200).send(dataVideos);
    }
});

router.get('/games/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const games = await Videogame.findAll({
            where: { id: id },
            include: {
                model: Generos,
                atrributes: ['name'],
                through: {
                    atrributes: ['id', 'name'],
                },
            }
        })
        res.send(games)
    } catch (e) {

    }

});

// router.get('/', async (req, res) => {

//     try {
//         let dataVideos = await Videogame.findAll({
//             include: Generos
//         });
//         res.status(202).send(dataVideos);
//     } catch (error) {
//         res.status(404).send(error);
//     }
// })

router.post('/', async (req, res) => {

    try {
        const { image, name, description, released, rating, platforms, genero } = req.body;
        console.log(req.body);
        if (name != '' && description != '') {
            const newVideojuego = await Videogame.create({
                image,
                name,
                description,
                released,
                rating,
                platforms,
            });

            let generos = await Generos.findAll({
                where: {
                    name:  genero
                }
            })
            // let generos = Generos.findAll({
            //     where: {
            //         name: genero.name,
            //     },
            // })
            newVideojuego.addGeneros(generos);
            res.send(newVideojuego)
        } else {
            res.send('faltan datos requeridos')
        }

    } catch (error) {
        console.log(error)

    }



});

router.get('/genders',async(req,res)=>{
    try {
        let gender = await Generos.findAll();

        res.status(200).send(gender);
    } catch (error) {
        console.log(error)
    }
})
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

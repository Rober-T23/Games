const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Generos } = require('../db');


/* Obtengo  las videogames de la Api */
const getApiInfo = async () => {
    const lengthdata = await Videogame.findAll();
    if (lengthdata.length < 100) {
        for (let index = 1; index < 6; index++) {
            const urlApi = await axios.get(
                `https://api.rawg.io/api/games?key=${API_KEY}&page=${index}`
            );
            await urlApi.data.results.map(async (el) => {
                const dataDetaill = await axios.get(`https://api.rawg.io/api/games/${el.id}?key=${API_KEY}`)
                let videogamesCreate = await Videogame.create({
                    image: dataDetaill.data.background_image,
                    name: dataDetaill.data.name,
                    description: dataDetaill.data.description,
                    released: dataDetaill.data.released,
                    rating: dataDetaill.data.rating,
                    platforms: dataDetaill.data.platforms?.map(data_plataform => { return data_plataform.platform.name }),
                });
                let genero = dataDetaill.data.genres;
                let generos = await Generos.findAll({
                    where: {
                        name: genero.map(e => e.name)
                    }
                })

                videogamesCreate.addGeneros(generos);

            });


        }
    } else {
        console.log('los datos de videogames ya estan cargados 202');
    }
};

const getDbinfo = async () => {
    return await Videogame.findAll({
        include: {
            model: Generos,
            atrributes: ['name'],
            through: {
                atrributes: ['id', 'name'],
            },
        },
    });
};

module.exports = {
    getDbinfo,
    getApiInfo,
};
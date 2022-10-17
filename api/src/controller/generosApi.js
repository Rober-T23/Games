const axios = require('axios');
const { Generos } = require('../db');
const { API_KEY } = process.env;

module.exports = {
    getgenerosApi: async () => {
        try {
            const lengthdata = await Generos.findByPk(1);

            if (!lengthdata) {
                const generosApi = (await axios.get(
                    `https://api.rawg.io/api/genres?key=${API_KEY}`
                ))
                let generosApis = generosApi.data.results.map(e => e.name);

                generosApis.forEach((el) => {
                    Generos.findOrCreate({
                        where: { name: el },
                    });
                });
                console.log('Generos agregados correctamente');
            } else {
                console.log('los datos de los generos ya estan cargados');
            }

        } catch (error) {
            console.log('error: ' + error);
        }
    },
};
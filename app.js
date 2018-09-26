const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direction:{
        alias: 'd',
        desc: "Dirección de la ciudad para obtener el clima",
        demand: true
    }
}).argv;

const getClima = async (direccion) => {
    try {
        const coors = await lugar.getLongTLat(direccion);
        const temp = await clima.getClima(coors.lat, coors.lng);
        return `La temperatura en ${ coors.location } es de ${ temp } °C`;
    } catch (error) {
        return `${ error }`;
    }
    
}

getClima(argv.direction)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));
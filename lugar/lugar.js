const axios = require('axios');

const getLongTLat = async (direccion) => {
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ direccion }&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`);

    if(resp.data.status === "ZERO_RESULTS"){
        throw new Error(`No hay respuesta para la ciudad ${ direccion } selecionada`)
    }

    return{
        location: resp.data.results[0].formatted_address,
        lat: resp.data.results[0].geometry.location.lat,
        lng: resp.data.results[0].geometry.location.lng
    }
}

module.exports = {
    getLongTLat
}
const axios = require('axios');

const getClima = async (lati, long) => {

    const key = '8d6f54f9b11d7b45c1889a8866a47227';
    const urlApi = `http://api.openweathermap.org/data/2.5/forecast?lat=${ lati }&lon=${ long }&appid=${key}&units=metric`;

    let resp = await axios.get(urlApi);
    if(Number(resp.data.cod) === 200){
        return resp.data.list[0].main.temp;
    }
    else{
        throw new Error('Se ocurrió un error');
    }
}

module.exports = {
    getClima
}
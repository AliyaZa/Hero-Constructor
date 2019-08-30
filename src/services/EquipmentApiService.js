import axios from 'axios';

const instance =axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://test.datalb.ru/test.json'
});

export const EquipmentApiService={
    getDefaultModels(){
        return instance.get()
        .then(res=> res.data)
    }
};


/*
axios.defaults.proxy = {
    host: 'http://test.datalb.ru',
    port: 8080
};

class EquipmentApiService {
    async getDefaultModels() {
        return axios.get('/test.json');
    }
}

export default new EquipmentApiService();*/
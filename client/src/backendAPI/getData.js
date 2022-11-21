import axios from 'axios';

const ENDPOINT = 'http://localhost:5000';

export const GetData = {
    getDataFromUsers: async ()=>{
        const res = await axios.get(ENDPOINT + '/users').then(r=>{
            console.log(r.data);
            return r.data;
        })   
        return res;
    },
    getDataFromDiscover: async ()=>{
        const res = await axios.get(ENDPOINT + '/discover').then(r=>{
            console.log(r.data);
            return r.data;
        })   
        return res;
    },
    getDataFromDisease: async ()=>{
        const res = await axios.get(ENDPOINT + '/disease').then(r=>{
            console.log(r.data);
            return r.data;
        })   
        return res;
    },
    getDataFromCountry: async ()=>{
        const res = await axios.get(ENDPOINT + '/country').then(r=>{
            console.log(r.data);
            return r.data;
        })   
        return res;
    },
    getDataFromDiseaseType: async ()=>{
        const res = await axios.get(ENDPOINT + '/disease-type').then(r=>{
            console.log(r.data);
            return r.data;
        })   
        return res;
    },
    getDataFromPublicServant: async ()=>{
        const res = await axios.get(ENDPOINT + '/public-servant').then(r=>{
            console.log(r.data);
            return r.data;
        })   
        return res;
    },
    getDataFromRecord: async ()=>{
        const res = await axios.get(ENDPOINT + '/record').then(r=>{
            console.log(r.data);
            return r.data;
        })   
        return res;
    },
    getDataFromSpecialize: async ()=>{
        const res = await axios.get(ENDPOINT + '/specialize').then(r=>{
            console.log(r.data);
            return r.data;
        })   
        return res;
    },
    getDataFromDoctor: async ()=>{
        const res = await axios.get(ENDPOINT + '/doctor').then(r=>{
            // console.log(r.data);
            return r.data;
        })   
        return res;
    }
    
}

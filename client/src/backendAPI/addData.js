import axios from 'axios';

const ENDPOINT = 'http://localhost:5000';

export const AddData = {
    addDataFromUsers: async (data)=>{
        await axios({
            method: "post",
            url: ENDPOINT + '/user',
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    },
    addDataFromDiscover: async (data)=>{
        await axios({
            method: "post",
            url: ENDPOINT + '/discover',
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    },
    addDataFromDisease: async (data)=>{
        await axios({
            method: "post",
            url: ENDPOINT + '/disease',
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    },
    addDataFromCountry: async (data)=>{
        await axios({
            method: "post",
            url: ENDPOINT + '/country',
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    },
    addDataFromDiseaseType: async (data)=>{
        await axios({
            method: "post",
            url: ENDPOINT + '/disease-type',
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    },
    addDataFromPublicServant: async (data)=>{
        await axios({
            method: "post",
            url: ENDPOINT + '/public-servant',
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    },
    addDataFromRecord: async (data)=>{
        await axios({
            method: "post",
            url: ENDPOINT + '/record',
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });   
    },
    addDataFromSpecialize: async (data)=>{
        await axios({
            method: "post",
            url: ENDPOINT + '/specialize',
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    },
    addDataFromDoctor: async (data)=>{
        await axios({
            method: "post",
            url: ENDPOINT + '/doctor',
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    }
    
}

import axios from 'axios';

const ENDPOINT = 'http://localhost:5000';

export const UpdateData = {
    updateDataFromUsers: async (data, prevEmail)=>{
        await axios({
            method: "put",
            url: ENDPOINT + '/users/' + prevEmail,
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    },
    updateDataFromDiscover: async (data, prevDS)=>{
        await axios({
            method: "put",
            url: ENDPOINT + '/discover/' + prevDS,
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    },
    updateDataFromDisease: async (data, prevId)=>{
        await axios({
            method: "put",
            url: ENDPOINT + '/disease/' + prevId,
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    },
    updateDataFromCountry: async (data, cname)=>{
        await axios({
            method: "put",
            url: ENDPOINT + '/country/' + cname,
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    },
    updateDataFromDiseaseType: async (data, prevId)=>{
        await axios({
            method: "put",
            url: ENDPOINT + '/disease-type/' + prevId,
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    },
    updateDataFromPublicServant: async (data, prevEmail)=>{
        await axios({
            method: "put",
            url: ENDPOINT + '/public-servant/' + prevEmail,
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    },
    updateDataFromRecord: async (data, prevEmail)=>{
        await axios({
            method: "put",
            url: ENDPOINT + '/record/' + prevEmail,
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    },
    updateDataFromSpecialize: async (data, prevEmail)=>{
        await axios({
            method: "put",
            url: ENDPOINT + '/specialize/' + prevEmail,
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    },
    updateDataFromDoctor: async (data, prevEmail)=>{
        await axios({
            method: "put",
            url: ENDPOINT + '/doctor/' + prevEmail,
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    }
    
}

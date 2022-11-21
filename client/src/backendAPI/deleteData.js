import axios from 'axios';

const ENDPOINT = 'http://localhost:5000';

export const DeleteData = {
    deleteDataFromUsers: async (email)=>{
        const res = await axios.delete(ENDPOINT + '/users/' + email).then((r)=>{
            return r.status;
        })
        return res;
    },
    deleteDataFromDiscover: async (diseasecode)=>{
        const res = await axios.delete(ENDPOINT + '/discover/' + diseasecode).then((r)=>{
            return r.status;
        })
        return res;
    },
    deleteDataFromDisease: async (id)=>{
        const res = await axios.delete(ENDPOINT + '/disease/' + id).then((r)=>{
            return r.status;
        })
        return res;
    },
    deleteDataFromCountry: async (cname)=>{
        const res = await axios.delete(ENDPOINT + '/country/' + cname).then((r)=>{
            return r.status;
        })
        return res;
    },
    deleteDataFromDiseaseType: async (id)=>{
        const res = await axios.delete(ENDPOINT + '/disease-type/' + id).then((r)=>{
            return r.status;
        })
        return res;
    },
    deleteDataFromPublicServant: async (email)=>{
        const res = await axios.delete(ENDPOINT + '/public-servant/' + email).then((r)=>{
            return r.status;
        })
        return res;
    },
    deleteDataFromRecord: async (email)=>{
        const res = await axios.delete(ENDPOINT + '/record/' + email).then((r)=>{
            return r.status;
        })
        return res;
    },
    deleteDataFromSpecialize: async (id)=>{
        const res = await axios.delete(ENDPOINT + '/specialize/' + id).then((r)=>{
            return r.status;
        })
        return res;
    },
    deleteDataFromDoctor: async (email)=>{
        const res = await axios.delete(ENDPOINT + '/doctor/' + email).then((r)=>{
            return r.status;
        })
        return res;
    }
    
}

import {ENV} from '../config.js';
import axios from 'axios';

const apiUrl = ENV.PRODUCTION === "production" ? ENV.API_URL : ENV.TEST_URL;

export const getList = async () => {
    return await axios.get(apiUrl)
    .then(response => response.data)
    .catch(err => console.log(err));
}


export const saveMember = async (name) => {

    //TODO : change for axios
    
    return await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({
            name: name,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => response.json());
}



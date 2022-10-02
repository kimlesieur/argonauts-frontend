import {ENV} from '../config.js';

const apiUrl = ENV.PRODUCTION === "production" ? ENV.API_URL : ENV.TEST_URL;

export const getList = async () => {
    return await fetch(apiUrl)
    .then(res => res.json());
}

export const saveMember = async (name) => {
    return await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({
            name: name,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(res => res.json());
}



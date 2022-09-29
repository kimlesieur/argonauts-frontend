import {ENV} from '../config.js';

export const getList = async () => {
    return await fetch(ENV.API_URL)
    .then(response => response.json());
}

export const saveMember = async (name) => {
    return await fetch(ENV.API_URL, {
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


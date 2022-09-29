import {ENV} from '../config.js';

export const getList = async () => {

    return await fetch('http://localhost:4001/argonautes')
    .then(response => response.json());
    
}

export const saveMember = async (name) => {
    console.log(name);
    return await fetch('http://localhost:4001/argonautes', {
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


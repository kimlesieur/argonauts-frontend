import {ENV} from '../config.js';

export const getList = async () => {

    return await fetch('https://jason-argonauts.herokuapp.com/argonautes')
    .then(response => response.json());
    
}

export const saveMember = async (name) => {
    console.log(name);
    return await fetch('https://jason-argonauts.herokuapp.com/argonautes', {
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


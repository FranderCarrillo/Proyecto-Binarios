const baseUrl = 'http://localhost:3000/landing-services';

export const getAll = () =>{
    return fetch(`${baseUrl}`);
}

export const getById = (id) =>{
    return fetch(`${baseUrl}/${id}`);
}

export const create = (user) =>{
    return fetch(baseUrl, {
        method: 'POST',
        
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}

export const update = (user) =>{
    fetch(`${baseUrl}/3`, {
        method: 'PUT',

        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}

export const remove = (user) =>{

}


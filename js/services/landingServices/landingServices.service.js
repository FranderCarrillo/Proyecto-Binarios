const baseUrl = 'http://localhost:3000/landing-services';

export const getAll = () =>{
    return fetch(`${baseUrl}`);
}

export const getById = (id) =>{
    return fetch(`${baseUrl}/${id}`);
}

export const create = (LandingService) =>{
    return fetch(baseUrl, {
        method: 'POST',
        
        body: JSON.stringify(LandingService),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}

export const update = (LandingService,id) =>{
    fetch(`${baseUrl}/${id}`, {
        method: 'PUT',

        body: JSON.stringify(LandingService),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}

export const remove = (LandingService) =>{
}


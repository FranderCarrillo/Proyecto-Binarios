const baseUrl = 'http://localhost:3000/header';

export const getAll = () => {
 return fetch(`${baseUrl}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
 });
}

export const getById = (id) => {
 return fetch(`${baseUrl}/${id}`);
}

export const create = (header) => {
    return fetch(`${baseUrl}`, {
        method: 'POST',
        body: JSON.stringify(header),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
}

export const update = (id, header) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(header),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    });
}

export const remove = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    });
}



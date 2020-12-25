
export function fetchWithAu(url, method, token, data) {
    return fetch(url, {
        method: method,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: data === undefined ? null : JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) {
                return res.json().then(
                    (result) => {
                        throw Error(result.message)
                    },
                    (erro) => {
                        throw Error('Unauthorized')
                    }
                );
            }
            return res.json();
        });
}

//message -> messsage
export function fetchWithAuV2(url, method, token, data) {
    return fetch(url, {
        method: method,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: data === undefined ? null : JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) {
                return res.json().then(
                    (result) => {
                        throw Error(result.messsage)
                    },
                    (erro) => {
                        throw Error('Unauthorized')
                    }
                );
            }
            return res.json();
        });
}


export function fetchWithoutAu(url, method, data) {
    return fetch(url, {
        method: method,
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Credentials": true
        },
        body: data === undefined ? null : JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) {
                return res.json().then(
                    (result) => {
                        throw Error(result.message)
                    },
                    (erro) => {
                        throw Error('Unauthorized')
                    }
                );
            }
            return res.json();
        });
}


export function fetchWithAuFormData(url, method, token, data) {
    return fetch(url, {
        method: method,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        },
        body: data
    })
        .then(res => {
            if (!res.ok) {
                return res.json().then(
                    (result) => {
                        throw Error(result.message)
                    },
                    (erro) => {
                        throw Error('Unauthorized')
                    }
                );
            }
            return res.json();
        });
}
/** @module lib/Api */

export async function post(url, body) {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
    });
    return response.json();
}

export async function get(url) {
    const response = await fetch(url, {
        method: "GET",
    });

    return response.json();
}

export async function put(url, body) {
    const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(body)
    });

    return response.json();
}

export async function deleteRequest(url){
    const response = await fetch(url, {
        method: "DELETE"
    });

    return response.json();
}

export async function patch(url, body) {
    const response = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify(body),
    });

    return response.json()
}
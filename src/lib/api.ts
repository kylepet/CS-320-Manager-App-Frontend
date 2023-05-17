import { AUTH } from "./auth"

function buildBaseHeaders() {
    const headers = new Headers();
    const token = AUTH.get();
    if (token != undefined) {
        headers.set("Authorization", `Bearer ${token}`)
    }

    return headers;
}

function get(pathname: string) {
    const headers = buildBaseHeaders();

    return fetch(`http://localhost:3000${pathname}`, {
        method: "GET",
        headers
    })
}

function post(pathname: string, body: Record<string, any>) {
    const headers = buildBaseHeaders();
    headers.set("Content-Type", "application/json");

    return fetch(`http://localhost:3000${pathname}`, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
    })
}

export const API = {
    async submitStudentApplication(body: any) {
        const response = await post('/studentApps/submit', body);
        return await response.json()
    },

    async getAllStudentApplications() {
        const response = await get('/studentApps/allApplications');
        return await response.json()
    },

    async accept(body: {
        accept: boolean
        studEmail: string
        profEmail: string
      }) {
        const response = await post('/accept', body);
        return await response.json()
    },

    async changeCap(body: {
        capChange: number
        profEmail: string
      }) {
        const response = await post('/changeCap', body);
        return await response.text()
    },

    async getSections() {
        const response = await get('/sections');
        return await response.json()
    },

    async getManagerPool() {
        const response = await get('/manager-pool');
        return await response.json()
    },

    async getProfile() {
        const response = await get('/profile');
        return await response.json()
    },

    async signin(body: any) {
        const response = await post('/signin', body);
        return await response.json()
    }
}
  
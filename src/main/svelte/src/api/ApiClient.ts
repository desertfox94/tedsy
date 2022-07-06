export default class ApiClient {
    baseUrl: string
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    async get<T>(path: string): Promise<T> {
        return fetch(`${this.baseUrl}${path}`).then(async r => await r.json())
    }

    async post<T>(path: string, body: T): Promise<Response> {
        return fetch(`${this.baseUrl}${path}`, {
            body: JSON.stringify(body), 
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

}

export const client: ApiClient = new ApiClient("http://localhost:8040")
import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.potterdb.com/v1'
})

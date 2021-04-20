import axios from 'axios'


export const instance = axios.create({
    baseUrl: "localhost:8080/",
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    timeout: 60000
})
import axios from "axios";

const vagasApi = axios.create({
    baseURL: "http://192.168.0.100:3000/api/vagas"
});

export default vagasApi;
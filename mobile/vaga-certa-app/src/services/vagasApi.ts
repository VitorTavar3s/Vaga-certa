import axios from "axios";

const vagasApi = axios.create({
    baseURL: "http://localhost:3000/api/vagas"
});

export default vagasApi;
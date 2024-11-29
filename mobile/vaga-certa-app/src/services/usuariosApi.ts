import axios from "axios";

const usuariosApi = axios.create({
    baseURL: "http://localhost:3000/api/usuarios"
});

export default usuariosApi;
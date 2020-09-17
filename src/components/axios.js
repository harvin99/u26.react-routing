import axios from "axios"

const instance = axios.create({
    baseURL : "https://blog-api-tvh.herokuapp.com/api",
})
export default instance
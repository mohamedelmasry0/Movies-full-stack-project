import axios from "axios";
const instance =axios.create({
      baseURL: "http://localhost:8001",
    //  baseURL: "http://localhost:8002",
    // baseURL: "http://localhost:3000/",
    // baseURL: "https://cryptic-headland-94862.herokuapp.com/https://movies-backen.herokuapp.com",
});
export default instance;

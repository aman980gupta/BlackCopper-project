import axios from "../../api/axios"
const  getProducts = ()=>{
    return axios.get("/products")
};
export default getProducts;
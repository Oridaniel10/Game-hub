import axios from "axios";

 export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key : '0c0598a1d4784b468364fbcf26e6bae2'
    }
})
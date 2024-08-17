import axios from "axios"
export async function productDeatils(id) {
    try{

        let {data} = axios.get(`http://localhost:3000/product/${id}`)
        return data
    }
    catch (err){
        return err
    }
        
}
import axios from "axios"


export const getCar = async () =>{
    let result = await axios.get('/cars.json')
    console.log(result.data.cars);
    
}
import axios from 'axios'

let url = `http://localhost:7000`



export const getCompanys = async ()=>{
    try {
        const resp = await axios.get(`${url}/names`);
        return  resp.data
  
        
    } catch (err) {
        console.error(err);
    }
  }
export const getAllInfo = async ()=>{
    try {
        const resp = await axios.get(`${url}/clients`)
        return  resp.data
  
        
        
    } catch (err) {
        console.error(err);
    }
         
  }
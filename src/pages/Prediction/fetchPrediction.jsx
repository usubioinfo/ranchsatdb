import axios from 'axios'
import { env } from '../../env';
export const fetchPrediction = async (mdata)=>{

    const res = await axios.post(`${env.BACKEND}/api/prediction?`, mdata, {});

    const data = JSON.stringify(res.data)
    
    
  

  return data;
}
import axios from 'axios'
import { env } from '../../env';
export const runPred = async (data)=>{

  
    const res = await axios.post(`${env.BACKEND}/api/prediction`, data);

    const dat = res.data

  return dat;
}
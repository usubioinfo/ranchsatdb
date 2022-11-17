import axios from 'axios'
import { env } from '../../env';
export const fetchBlast = async (mdata)=>{

    const res = await axios.post(`${env.BACKEND}/api/blast?`, mdata, {});

    const data = res.data
    
    console.log(data)
  

  return data;
}
import axios from 'axios'
import { env } from '../../env';
export const fetchEPCR = async (pdata, seq, mismatch, genome)=>{

    const res = await axios.get(`${env.BACKEND}/api/epcr?primerdata=${pdata}&seq=${seq}&mismatch=${mismatch}&genome=${genome}`);

    const data = res.data
    
    // console.log(data)
  

  return data;
}
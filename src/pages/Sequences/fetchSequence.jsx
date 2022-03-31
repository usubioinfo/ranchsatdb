import axios from 'axios';
import { env } from '../../../env';
export const fetchSequence = async (mdata, flank, filename )=>{

  for (let data of mdata) {
    data['flank'] = flank
    const res = await axios.get(`${env.BACKEND}/api/seq?chr=${data.chromosome}&start=${data.motif_start-flank}&stop=${data.motif_end+flank}&filename=${filename}`);

    const fasta = res.data;
    
    data['sequence'] =  fasta;

  }

  return mdata;
}
  


 

import axios from 'axios'
import { env } from '../../env';

export const fetchEPCR = async (pdata, seq, mismatch, genome) => {
  const res = await axios.get(`${env.BACKEND}/api/epcr`, {
    params: {
      primerdata: pdata,
      seq,
      mismatch,
      genome,
    },
  });

  return res.data;
}

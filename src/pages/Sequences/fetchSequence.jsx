import axios from 'axios';
import { env } from '../../env';

export const fetchSequence = async (mdata, flank, filename) => {
  for (const data of mdata) {
    data.flank = flank;
    const res = await axios.get(`${env.BACKEND}/api/seq`, {
      params: {
        chr: data.chromosome,
        start: data.motif_start - flank,
        stop: data.motif_end + flank,
        filename,
      },
    });

    data.sequence = res.data;
  }

  return mdata;
}

import axios from 'axios'

export const fetchSequence = async (mdata, flank, filename )=>{

  for (let data of mdata) {
    data['flank'] = flank
    const res = await axios.get(`http://localhost:3603/api/seq?chr=${data.chromosome}&start=${data.motif_start-flank}&stop=${data.motif_end+flank}&filename=${filename}`);

    const fasta = res.data;
    
    data['sequence'] =  fasta;

    // console.log(`${data.motif_start-flank}----${data.motif_end+flank}`)

  }

  return mdata;
}
  


 

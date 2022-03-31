import axios from 'axios'
import { env } from '../../../env';
export const fetchPrimers = async (data, minS, maxS, minTM, maxTM, minGC, maxGC)=>{

    // data['flank'] = flank
    // console.log(data.sequence)
    const res = await axios.get(`${env.BACKEND}/api/primers?seq=${data.sequence}&motif_length=${data.motif_length}&minS=${minS}&maxS=${maxS}&minTM=${minTM}&maxTM=${maxTM}&minGC=${minGC}&maxGC=${maxGC}&flank=${data.flank}`);

    const primer = res.data;
    
    
      data['f1'] =  primer.f1;
      data['f1tm'] =  primer.f1tm;
      data['f1GC'] =  primer.f1GC;
      data['r1'] =  primer.r1;
      data['r1tm'] =  primer.r1tm;
      data['r1GC'] =  primer.r1GC;
      data['p1psize'] =  primer.p1psize;
      data['f2'] =  primer.f2;
      data['f2tm'] =  primer.f2tm;
      data['f2GC'] =  primer.f2GC;
      data['r2'] =  primer.r2;
      data['r2tm'] =  primer.r2tm;
      data['r2GC'] =  primer.r2GC;
      data['p2psize'] =  primer.p2psize;
      data['f3'] =  primer.f3;
      data['f3tm'] =  primer.f3tm;
      data['f3GC'] =  primer.f3GC;
      data['r3'] =  primer.r3;
      data['r3tm'] =  primer.r3tm;
      data['r3GC'] =  primer.r3GC;
      data['p3psize'] =  primer.p3psize

    
    
   

    // seq; motif_length; minS; maxS; minTM; maxTM; minGC; maxGC; flank
    
  

  return data;
}
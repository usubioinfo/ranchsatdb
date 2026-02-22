import axios from 'axios'
import { env } from '../../env';

export const fetchPrediction = async (mdata) => {
  mdata.append('type', 'prediction');
  const submit = await axios.post(`${env.BACKEND}/api/jobs`, mdata);
  const jobId = submit.data.id;

  const maxAttempts = 180;
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const job = await axios.get(`${env.BACKEND}/api/jobs/${jobId}`);
    if (job.data.status === 'completed') {
      return JSON.stringify(job.data.result);
    }
    if (job.data.status === 'failed') {
      throw new Error(job.data.error || 'Prediction job failed');
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  throw new Error('Prediction job timed out');
}

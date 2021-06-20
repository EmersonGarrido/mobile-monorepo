import axios from 'axios';

const kbb = axios.create({
  baseURL: 'https://parallelum.com.br/fipe/api/v1',
});

export default kbb;

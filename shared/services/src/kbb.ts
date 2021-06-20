import axios from 'axios';

const kbb = axios.create({
  baseURL: 'https://api.br.v2.kbb.pt',
});

export default kbb;

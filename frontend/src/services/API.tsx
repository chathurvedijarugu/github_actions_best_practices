import axios from 'axios';
export default axios.create({
  baseURL:process.env.BASE_URL,
  headers: {
    'content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
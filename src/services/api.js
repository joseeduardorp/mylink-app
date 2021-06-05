import axios from 'axios';

export const key = 'f6813d5c3176d6f550694a891802e22b558f0ff0';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/',
  headers: {
    'Authorization': `Bearer ${key}`,
    'Content-type': 'application/json'
  }
});

export default api;

// key: f6813d5c3176d6f550694a891802e22b558f0ff0
// base url: https://api-ssl.bitly.com/v4/
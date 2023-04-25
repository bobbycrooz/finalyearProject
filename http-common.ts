import axios from 'axios';

const BaseUrl = process.env.BASE_URL;

export default axios.create({
  baseURL: BaseUrl,
  headers: {
    'Content-type': 'application/json'
  }
});

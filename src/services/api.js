import axios from 'axios';
import * as fakeData from '../server.json';

const fakeApi = {
  get(url) {
    const [path, param] = url.split('/');

    if (url === 'products') {
      return { data: fakeData.products };
    }

    if (path === 'products' && param) {
      const data = fakeData.products.find(p => p.id === Number(param));
      return { data };
    }

    if (path === 'stock' && param) {
      const data = fakeData.stock.find(s => s.id === Number(param));
      return { data };
    }

    return { data: null, status: 404 };
  },
};

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

/**
 * The production build of this app will be deployed
 * without a back-end, that's why we use the fake api
 * outside the development environment.
 */
export default process.env.NODE_ENV === 'development' ? api : fakeApi;

import axios from 'axios';

axios.defaults.baseURL = 'https://65bb688552189914b5bc06ec.mockapi.io/api';

export const getCatalog = async (params) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    const { data } = await axios.get('catalog', { headers, params });
    console.log('Отримані дані:', data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCatalogList = async () => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };

      const { data } = await axios.get('catalog-list', { headers });
       console.log('Отримані дані list:', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getCatalog;



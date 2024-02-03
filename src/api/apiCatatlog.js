import axios from 'axios';

axios.defaults.baseURL = 'https://65bb688552189914b5bc06ec.mockapi.io/api';

const headers = {
  'Content-Type': 'application/json',
};

export const getCatalog = async ({ page, limit }) => {
    const params = {
      page,
      limit,
    };

    const {data} = await axios.get('catalog', { headers, params });
    return data;
};

export const getList = async () => {
  const { data } = await axios.get('catalog-list', { headers });
     console.log(data);
    return data;

};


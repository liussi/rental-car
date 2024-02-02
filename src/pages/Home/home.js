
import getCatalog from 'api/apiCatatlog';
import React, { useEffect } from 'react';

function Home() {
 useEffect(() => {
    const fetchData = async () => {
      try {
        const catalogData = await getCatalog();
        console.log('Дані з каталогу:', catalogData);
      } catch (error) {
        console.error('Помилка при отриманні каталогу:', error);
      }
    };

    fetchData();
  }, []); // Порожній масив, щоб цей ефект запускався тільки після монтування компонента

  return <p>Favorites</p>;
}


export default Home;

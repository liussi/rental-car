import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2? family= Protest+Riot & family= Roboto:wght@100;400;500;700 & display=swap');
    /* Решта вашого CSS коду */

    h1{
         font-family: 'Protest Riot', sans-serif;
    }
    h2, h3 {
        font-family: 'ManropeSemiBold', sans-serif;
        /* Використовуйте ManropeSemiBold для заголовків */
    }

    p {
        font-family: 'Inter', sans-serif;
        /* Використовуйте Inter для параграфів */
    }

    button {
        font-family: 'MontserratRegular', sans-serif;
        /* Використовуйте MontserratRegular для кнопок */
    }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2? family= Protest+Riot & family= Roboto:wght@100;400;500;700 & display=swap');
    /* Решта вашого CSS коду */
   body {
        margin: 0; 
        padding: 0;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 1440px;
    }
    h1{
         font-family: 'Protest Riot', sans-serif;
        
    padding: 0;
    }
    h2, h3 {
        font-family: 'ManropeSemiBold', sans-serif;
         margin: 0;
    padding: 0;

    }

    p {
        font-family: 'Inter', sans-serif;
         padding: 0;
        margin: 0;
    
    }
    a {
        text-decoration: none;
    }

    img {
    display: block;
    max-width: 100%;
    height: auto;
    }
    button {
        font-family: 'MontserratRegular', sans-serif;
 cursor: pointer;
        border: none;
    }
   

`;

export default GlobalStyle;

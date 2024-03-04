import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import GlobalStyle from 'styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
<BrowserRouter basename="/rental-car">
  <GlobalStyle />
      <App />
      </BrowserRouter>
       </Provider>
  </React.StrictMode>
);
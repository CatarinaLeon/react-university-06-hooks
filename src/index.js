import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';

import './styles/index.css';
import './styles/global.module.css';
import './styles/variables.module.css';
import './styles/listStyles';
// import 'node_modules/modern-normalize/modern-normalize.css';   //Пример №2 инстралировать пакет и прописать этот путь

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

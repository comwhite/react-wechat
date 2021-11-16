import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 将app组件标签渲染到index页面的div上
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


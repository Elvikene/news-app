import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Services/stateService';
import { BrowserRouter } from 'react-router-dom';
// document.getElementById : берет html элемент с id root из DOM
// DOM это вся структура HTML в js объекте
// DOM хранится в глобальной переменной которая имеет имя 'document'

// React Dom это вспомогательный пакет реакта для взаимодействия с обычным DOM
// createRoot создает главную директорию где запускается все наше приложение

const root = ReactDOM.createRoot(document.getElementById('root'));
// render  = эта функция отрисовки React компонента
// Отрисовка это обработка компонента и перевод  из JSX или React элемент в чистый DOM
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

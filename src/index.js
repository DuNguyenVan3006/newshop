import React from 'react';
import ReactDOM from 'react-dom/client';
import Layouts from './components/Layouts';

import './sass/index.scss'
import { Provider } from 'react-redux';
import { store } from './redux/store';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>

        <Layouts />
    </Provider>

);


reportWebVitals();

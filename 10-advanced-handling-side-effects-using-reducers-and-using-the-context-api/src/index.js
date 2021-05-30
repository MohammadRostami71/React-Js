import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {AutoContextProvider} from "./store/auth-context";

ReactDOM.render(
    <AutoContextProvider>
        <App/>
    </AutoContextProvider>, document.getElementById('root'));

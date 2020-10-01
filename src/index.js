import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import "normalize.css"
import { GlobalStyles } from "./global-styles"

ReactDOM.render(
    <>
        <GlobalStyles/>
        <App/>
    </>, document.getElementById('root'));


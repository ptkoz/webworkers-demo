import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/AppConnector';
import {Provider} from "react-redux";

import store from "./store/store"; // use regular store
// import store from "./store/storeWorkerAdapter"; // use "worker" store

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

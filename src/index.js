import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/AppConnector';
import {Provider} from "react-redux";

// use either store run in the worker
import store from "./store/storeWorkerAdapter";

// or just use store like usual
// import store from "./store/store";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

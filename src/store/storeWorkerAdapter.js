import {defaultState} from "./reducer";
// eslint-disable-next-line import/no-webpack-loader-syntax
import StoreWorker from "worker-loader!./storeWorker";

/**
 * Adapts store web worker so it can be used just like regular store
 */
class StoreWorkerAdapter {
    constructor(worker) {
        this.worker = worker;
        this.lastKnownState = defaultState;
        this.listeners = [];

        this.worker.addEventListener("message", (message) => {
            console.log(message, this.listeners);
            this.lastKnownState = message.data;
            for (let listener of this.listeners) {
                listener();
            }
        })
    }

    dispatch = (action) => {
        this.worker.postMessage(action);
    }

    subscribe = (listener) => {
        console.log('Someone subscribed!');
        this.listeners.push(listener)

        return () => {
            this.listeners = this.listeners.filter((item) => item !== listener);
        }
    }

    getState = () => {
        console.log('Someone received state', this.lastKnownState);
        return this.lastKnownState;
    }
}

export default new StoreWorkerAdapter(new StoreWorker());

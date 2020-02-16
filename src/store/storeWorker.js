import store from "./store";

addEventListener("message", (message) => {
    store.dispatch(message.data);
});

store.subscribe(() => {
    postMessage(store.getState());
});

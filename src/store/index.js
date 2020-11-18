import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import appReducer from "./appReducer";

function createEnhancer() {
    window.devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    const devToolsEnhancer = window.devToolsExtension
        ? window.devToolsExtension()
        : (f) => f;
    return compose(applyMiddleware(thunk), devToolsEnhancer);
}

export default function configureStore(initialState = {}) {
    return createStore(appReducer, initialState, createEnhancer());
}

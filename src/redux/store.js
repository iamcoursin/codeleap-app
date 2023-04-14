import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./root-reducer";

const persistConfigure = {
    key: "persist-root",
    storage
}

const persistedReducer = persistReducer(persistConfigure, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(logger, thunk), );

export const persistor = persistStore(store);
export default store;
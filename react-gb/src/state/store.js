import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import profileReducer from './reducers/profile';
import messageReducer from './reducers/message';
import chatsReducer from './reducers/chats';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({
    profile: profileReducer,
    message: messageReducer,
    chats: chatsReducer
    
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store);

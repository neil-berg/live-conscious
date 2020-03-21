import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';

// const isDev = process.env.NODE_ENV === 'DEVELOPMENT';

export const store = createStore(rootReducer, composeWithDevTools());

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { donutApp } from './reducers';

export const store = createStore(donutApp, composeWithDevTools());

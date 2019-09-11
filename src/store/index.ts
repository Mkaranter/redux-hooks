import { createStore } from 'redux';
import { donutApp } from './reducers';

export const store = createStore(donutApp);

import React from 'react';

import './App.css';
import { IncrementWrapper } from './components/IncrementWrapper';
import { DecrementWrapper } from './components/DecrementWrapper';
import { Counter } from './components/Counter';

const App: React.FC = () => (
  <div className='app'>
    <Counter />
    <IncrementWrapper />
    <DecrementWrapper />
  </div>
);

export default App;

import React from 'react';

import { Button } from './Button';

export const DecrementWrapper = () => (
  <div>
    <Button title='Less donuts' onClick={() => console.log('less')} />
  </div>
);

import React from 'react';

import { Button } from './Button';

export const IncrementWrapper = () => (
  <div>
    <Button title='More donuts' onClick={() => console.log('more')} />
  </div>
);

import React from 'react';

import { Button } from './Button';

interface Props {
  oneLessDonut: () => void;
}

export const DecrementWrapper: React.FC<Props> = ({ oneLessDonut }) => (
  <div className='decrement button-wrapper'>
    <Button title='Less donuts' onClick={oneLessDonut} />
  </div>
);

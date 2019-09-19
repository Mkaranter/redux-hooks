import React from 'react';
import donut from './../assets/donut.png';

interface Props {
  count: number;
}

export const Counter: React.FC<Props> = ({ count }) => (
  <div className='counter'>
    <span>How many donuts? {count}</span> <img src={donut} alt='donut' />
  </div>
);

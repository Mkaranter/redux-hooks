import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import donut from './../assets/donut.png';
import { State } from './../store/reducers';

export const Counter: React.FC = () => {
  const count = useSelector(
    (state: State) => state.howManyDonuts,
    shallowEqual
  );

  return (
    <div className='counter'>
      <span>How many donuts? {count}</span> <img src={donut} alt='donut' />
    </div>
  );
};

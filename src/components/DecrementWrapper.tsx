import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from './Button';
import { decrementDonuts } from './../store/actions';

export const DecrementWrapper: React.FC = () => {
  const dispatch = useDispatch();

  const oneLessDonut = () => dispatch(decrementDonuts());

  return (
    <div className='decrement button-wrapper'>
      <Button title='Less donuts' onClick={oneLessDonut} />
    </div>
  );
};

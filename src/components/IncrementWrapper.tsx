import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from './Button';
import { incrementDonuts } from './../store/actions';

export const IncrementWrapper: React.FC = () => {
  const dispatch = useDispatch();

  const oneMoreDonut = useCallback(() => dispatch(incrementDonuts()), []);

  return (
    <div className='increment button-wrapper'>
      <Button title='More donuts' onClick={oneMoreDonut} />
    </div>
  );
};

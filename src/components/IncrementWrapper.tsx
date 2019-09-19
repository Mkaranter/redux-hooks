import React from 'react';

import { Button } from './Button';

interface Props {
  oneMoreDonut: () => void;
}

export const IncrementWrapper: React.FC<Props> = ({ oneMoreDonut }) => (
  <div className='increment button-wrapper'>
    <Button title='More donuts' onClick={oneMoreDonut} />
  </div>
);

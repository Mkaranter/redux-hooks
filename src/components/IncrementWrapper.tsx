import React from 'react';

import { Button } from './Button';

interface Props {
  oneMoreDonut: () => void;
}

export const IncrementWrapper: React.FC<Props> = ({ oneMoreDonut }) => (
  <div className='IncrementWrapper'>
    <Button title='More donuts' onClick={oneMoreDonut} />
  </div>
);

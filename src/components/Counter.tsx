import React from 'react';

interface Props {
  count: number;
}

export const Counter: React.FC<Props> = ({ count }) => (
  <div className='Counter'>
    <span>How many donuts? {count}</span>{' '}
    <img
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT42m1TmjGXTjZIyKde_E2pg9Qefpu9hUdXWJ7Zq-KXHDnc9NAapw'
      alt='donut'
    />
  </div>
);

import React from 'react';

interface Props {
  title: string;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ title }) => <button>{title}</button>;

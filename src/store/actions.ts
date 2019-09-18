export const INCREMENT = 'INCREMENT';
export const incrementDonuts = () => {
  return { type: INCREMENT };
};

export const DECREMENT = 'DECREMENT';
export const decrementDonuts = () => {
  return { type: DECREMENT };
};

export interface Action {
  type: string;
}

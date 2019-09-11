export const INCREMENT = 'INCREMENT';

export const incrementDonuts = () => {
  return { type: INCREMENT };
};

export interface Action {
  type: string;
}

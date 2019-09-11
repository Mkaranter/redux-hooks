import { INCREMENT, Action } from './actions';

interface State {
  howManyDonuts: number;
}

const initState = {
  howManyDonuts: 0
};

export const donutApp = (state: State = initState, action: Action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        howManyDonuts: state.howManyDonuts + 1
      };
    default:
      return state;
  }
};

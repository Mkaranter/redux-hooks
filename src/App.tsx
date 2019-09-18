import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from './store/reducers';
import { incrementDonuts, decrementDonuts } from './store/actions';
import './App.css';
import { IncrementWrapper } from './components/IncrementWrapper';
import { DecrementWrapper } from './components/DecrementWrapper';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = StateProps & DispatchProps;

const App: React.FC<Props> = ({
  howManyDonuts,
  oneMoreDonut,
  oneLessDonut
}) => (
  <div className='App'>
    <main>
      <span>How namy donuts? {howManyDonuts}</span>
      <IncrementWrapper oneMoreDonut={oneMoreDonut} />
      <DecrementWrapper oneLessDonut={oneLessDonut} />
    </main>
  </div>
);

const mapStateToProps = (state: State) => ({
  howManyDonuts: state.howManyDonuts
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  oneMoreDonut: () => dispatch(incrementDonuts()),
  oneLessDonut: () => dispatch(decrementDonuts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

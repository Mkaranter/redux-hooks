import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from './store/reducers';
import { incrementDonuts } from './store/actions';
import './App.css';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = StateProps & DispatchProps;

const App: React.FC<Props> = ({ howManyDonuts, oneMoreDount }) => (
  <div className='App'>
    <main>
      <span>How namy donuts? {howManyDonuts}</span>
      <button onClick={() => oneMoreDount()}>One More</button>
    </main>
  </div>
);

const mapStateToProps = (state: State) => ({
  howManyDonuts: state.howManyDonuts
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  oneMoreDount: () => dispatch(incrementDonuts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import { pick } from 'lodash';
import { createSelector } from 'reselect';
import { state } from './index';

export const connect = (stateToState, component) => {
  state.subscribe(nextState => {
    const componentStateValues = pick(component.state, Object.keys(stateToState));
    const valuesFromNextState = stateToState(nextState);
    const changed = filter(valuesFromNextState, (value, key) => {
      return value !== componentStateValues[key];
    });
    if (changed.length) {
      component.setState(changed);
    }
  });
};

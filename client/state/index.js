import { Observable } from 'rxjs';
import { userAdded$ } from './reducers/user-pool'

export const state = Observable.merge(userAdded$)
  .scan((state, reducer) => reducer(state), {
    users: [],
  });

// For debugging
state.subscribe(state => console.log('current state! ', state));

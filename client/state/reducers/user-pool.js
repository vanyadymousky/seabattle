import { socketUserAdded$ } from '../../helpers/socket';

export const userAdded$ = socketUserAdded$.map(users => state => ({
  ...state,
  users,
}));

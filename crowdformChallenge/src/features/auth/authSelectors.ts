import {RootState} from '../../app/store';

export const selectIsUserAuthenticated = (state: RootState) =>
  state.auth.isUserAuthenticated;

export const selectUser = (state: RootState) => state.auth.User;

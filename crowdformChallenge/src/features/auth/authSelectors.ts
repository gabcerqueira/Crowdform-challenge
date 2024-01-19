import {RootState} from '../../app/store';

export const selectIsUserAuthenticated = (state: RootState) =>
  state.auth.isUserAuthenticated;

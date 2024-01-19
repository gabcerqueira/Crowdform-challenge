import {createReducer} from '@reduxjs/toolkit';
import {User} from '../../models/user/User';
import {UserRegistration} from '../../models/user/UserRegistration';
import {login} from './authActions';

interface AuthState {
  isUserAuthenticated: boolean;
  lastCreatedUser: UserRegistration | null;
  User: User | null;
  isLoading: boolean;
}

export const initialState: AuthState = {
  isUserAuthenticated: false,
  lastCreatedUser: null,
  User: null,
  isLoading: false,
};

export const authReducer = createReducer(initialState, builder => {
  builder.addCase(login.pending, state => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(login.rejected, state => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(login.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));
});

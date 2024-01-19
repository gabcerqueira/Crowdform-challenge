import {createReducer} from '@reduxjs/toolkit';
import {User} from '../../models/user/User';
import {UserRegistration} from '../../models/user/UserRegistration';
import {createAccount, login} from './authActions';

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
    isLoading: true,
  }));

  builder.addCase(login.rejected, state => ({
    ...state,
    isLoading: false,
  }));

  builder.addCase(login.fulfilled, (state, action) => ({
    ...state,
    isLoading: false,
    User: action.payload,
    isUserAuthenticated: true,
  }));
  builder.addCase(createAccount.pending, state => ({
    ...state,
    isLoading: true,
  }));

  builder.addCase(createAccount.rejected, state => ({
    ...state,
    isLoading: false,
  }));

  builder.addCase(createAccount.fulfilled, (state, action) => ({
    ...state,
    isLoading: false,
    lastCreatedUser: action.payload,
  }));
});

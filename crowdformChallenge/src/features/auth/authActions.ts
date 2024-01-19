import {createAsyncThunk} from '@reduxjs/toolkit';
import {User} from '../../models/user/User';
import {authService} from './authService';
import {UserCredentials} from '../../models/auth/UserCredentials';
import {UserRegistration} from '../../models/user/UserRegistration';

export const login = createAsyncThunk<User, UserCredentials>(
  'auth/login',
  authService.login,
);

export const createAccount = createAsyncThunk<
  UserRegistration,
  UserRegistration
>('auth/createAccount', authService.createAccount);

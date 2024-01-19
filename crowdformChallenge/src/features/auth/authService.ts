import {UserCredentials} from '../../models/auth/UserCredentials';
import {User} from '../../models/user/User';
import {UserRegistration} from '../../models/user/UserRegistration';

const login = (credentials: UserCredentials) => {
  const dummyUser: User = {
    firstName: 'john',
    lastName: 'doe',
    email: 'johndoe@gmail.com',
  };

  return dummyUser;
};

const createAccount = (userRegistration: UserRegistration) => {
  return userRegistration;
};

export const authService = {
  login,
  createAccount,
};

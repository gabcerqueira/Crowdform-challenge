import {User} from './User';

export type UserRegistration = Pick<
  User,
  'email' | 'firstName' | 'lastName'
> & {
  password: string;
};

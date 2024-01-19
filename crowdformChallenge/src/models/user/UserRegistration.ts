import {User} from './User';

export type UserRegistration = User & {
  password: string;
};

import { UserType } from '../types/types';

export type SendConfirmationEmailServerType = {
  message: string;
};

export type UserLoginServerType = {
  user: UserType;
  token: string;
};

import { IUser } from './user.interface';

export interface IUserState {
  isLoading: boolean;
  users: IUser[];
  error: string | null;
}

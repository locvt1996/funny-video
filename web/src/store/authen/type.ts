export interface IUserInfo {
  email: string;
  id: string;
}

export interface IAuthen {
  loading: boolean;
  errorMessage: string;
  userInfo: IUserInfo | null;
}

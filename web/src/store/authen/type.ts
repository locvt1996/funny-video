export interface IUserInfo {
  email: string;
  id: string;
}

export interface IAuthen {
  loading: boolean;
  errorMessage: string;
  userInfo: IUserInfo | null;
}

export interface IAuthenApiReturn {
  userInfo: IUserInfo;
  token: string;
}

export interface IAuthenApiPostData {
  email: string;
  password: string;
}

export interface IRegisterRequest {
  email: string;
  login: string;
  first_name: string;
  last_name: string;
  password: string;
}

export interface IRegisterResponse {
  data: {
    token: string;
    user: {
      id: number;
      email: string;
      login: string;
      first_name: string;
      last_name: string;
      is_staff: boolean;
    };
  };
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  data: {
    token: string;
    user: {
      id: number;
      email: string;
      login: string;
      first_name: string;
      last_name: string;
      is_staff: boolean;
    };
  };
}

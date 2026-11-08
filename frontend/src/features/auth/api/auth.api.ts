import { baseAxios } from "../../../shared/api/client";
import type {
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
} from "./types";

export const authApi = {
  register: (data: IRegisterRequest): Promise<IRegisterResponse> => {
    return baseAxios("signup", "POST", data);
  },
  login: (data: ILoginRequest): Promise<ILoginResponse> => {
    return baseAxios("login", "POST", data);
  },
};

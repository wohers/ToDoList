import { create } from "zustand";

interface IUser {
  id: number | null;
  email: string | null;
  login: string | null;
  first_name: string | null;
  last_name: string | null;
  is_staff: boolean | null;
}

interface IUserStore {
  user: IUser;
  setUser: (user: IUser) => void;
  clearUser: () => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  user: {
    id: null,
    email: null,
    login: null,
    first_name: null,
    last_name: null,
    is_staff: null,
  },
  setUser: (user: IUser) => {
    set({ user: user });
  },
  clearUser: () => {
    set({
      user: {
        id: null,
        email: null,
        login: null,
        first_name: null,
        last_name: null,
        is_staff: null,
      },
    });
  },
}));

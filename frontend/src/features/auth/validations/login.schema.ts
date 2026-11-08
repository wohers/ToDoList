import { z } from "zod";

export const useLoginSchema = () => {
  const loginSchema = z.object({
    email: z.email({
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Пожалуйста введите правильный email",
    }),
    password: z
      .string()
      .min(8, "Минимальная длинна 8 символа")
      .max(64, "Максимальная длинна 64 символов"),
  });

  return { loginSchema };
};

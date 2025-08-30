import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import type z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../api/auth.api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useLoginSchema } from "../validations/login.schema";
import { useUserStore } from "../../../shared/stores/user.store";

export const LoginForm = () => {
  const { loginSchema } = useLoginSchema();
  type LoginDataType = z.infer<typeof loginSchema>;
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginDataType>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login, isPending } = useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.token);
      setUser(data.data.user);      
      toast.success("Вы успешно Вошли!");
      navigate("/today");
    },
    onError: (error) => {
      toast.error("Произошла ошибка, попробуйте позже...");
      console.error(error);
    },
  });

  const onSubmit = (data: LoginDataType) => {
    console.log(data);
    login(data);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      {[
        {
          name: "email",
          label: "Почта",
          placeholder: "example@gmail.com",
          type: "email",
        },
        {
          name: "password",
          label: "Пароль",
          placeholder: "Введите пароль",
          type: "password",
        },
      ].map((fieldConfig) => (
        <Controller
          key={fieldConfig.name}
          name={fieldConfig.name as keyof LoginDataType}
          control={control}
          render={({ field }) => (
            <label className="flex flex-col min-h-[80px]">
              <span className="ml-2.5">{fieldConfig.label}</span>
              <input
                type={fieldConfig.type}
                placeholder={fieldConfig.placeholder}
                {...field}
                className="w-[360px] bg-white text-gray-900 border border-gray-200 rounded-[10px] outline-none px-2 py-1 focus:border-red-400 transition-colors"
              />
              <div className="h-6 text-red-500 text-sm mt-1">
                {errors[fieldConfig.name as keyof typeof errors]?.message}
              </div>
            </label>
          )}
        />
      ))}
      <div className="border-b-2 w-[360px]">
        <button
          type="submit"
          className="h-10 bg-red-900 rounded-[10px] text-white hover:bg-red-950 transition-colors font-semibold mt-2 w-[360px] mb-5"
        >
          {isPending ? "Загрузка" : "Войти"}
        </button>
      </div>
      <span className="mt-5">
        Нет аккаунта? тогда{" "}
        <Link to={"/register"} className="text-[#6237B8]">
          зарегестрируйтесь
        </Link>
      </span>
    </form>
  );
};

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { useRegisterSchema } from "../validations/register.schema";
import type z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../api/auth.api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const RegForm = () => {
  const { registerSchema } = useRegisterSchema();
  type RegisterDataType = z.infer<typeof registerSchema>;
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterDataType>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      login: '',
      first_name: '',
      last_name: '',
      password: '',
      password2: ''
    }
  });

  const { mutate: register, isPending } = useMutation({
    mutationFn: authApi.register,
    onSuccess: () => {
      toast.success("Вы успешно зарегестрировались!");
      navigate("/login");
    },
    onError: (error) => {
      toast.error("Произошла ошибка, попробуйте позже...");
      console.error(error);
    },
  });

  const onSubmit = (data: RegisterDataType) => {
    console.log(data);
    register(data);
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
          name: "login",
          label: "Логин",
          placeholder: "terminator",
          type: "text",
        },
        { name: "first_name", label: "Имя", placeholder: "Иван", type: "text" },
        {
          name: "last_name",
          label: "Фамилия",
          placeholder: "Иванов",
          type: "text",
        },
        {
          name: "password",
          label: "Пароль",
          placeholder: "Придумайте его",
          type: "password",
        },
        {
          name: "password2",
          label: "Повторите пароль",
          placeholder: "Повторите",
          type: "password",
        },
      ].map((fieldConfig) => (
        <Controller
          key={fieldConfig.name}
          name={fieldConfig.name as keyof RegisterDataType}
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
          {isPending ? "Загрузка" : "Зарегистрироваться"}
        </button>
      </div>
      <span className="mt-5">
        Уже есть аккаунт? тогда{" "}
        <Link to={"/login"} className="text-[#6237B8]">
          войдите
        </Link>
      </span>
    </form>
  );
};

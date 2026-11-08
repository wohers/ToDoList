import { RegForm } from "../../features/auth";
import okak from "../../assets/images/окак.jpg";

export const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="flex rounded-lg overflow-hidden max-w-4xl">
        <div className="w-1/2 p-8">
          <RegForm />
        </div>
        <div className="w-1/2">
          <img src={okak} alt="okak" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

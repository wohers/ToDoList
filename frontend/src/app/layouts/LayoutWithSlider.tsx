import { Slider } from "../../widgets/slider";
import { Outlet } from "react-router-dom";

export const LayoutWithSlider = () => {
  return (
    <div className="flex">
      <Slider />
      <main className="flex-1 ml-[80px] md:ml-[280px] p-4 md:p-6 min-h-screen bg-[#242424] transition-all duration-500 ease-out">
        <Outlet />
      </main>
    </div>
  );
};
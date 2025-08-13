import { Slider } from "../../widgets/slider"
import { Outlet } from "react-router-dom"

export const LayoutWithSlider = () => {
  return (
    <div>
      <Slider />
      <main>
        <Outlet />
      </main>
    </div>
  )
}


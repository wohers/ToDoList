import { Navigate, Route, Routes } from "react-router-dom"
import { LayoutWithSlider } from "../layouts/LayoutWithSlider"
import { Completed, Today } from "../../pages"

export const Router = () => {
  return (
    <Routes>
        <Route element={<LayoutWithSlider />}>
            <Route path="/today" element={<Today />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="*" element={<Navigate to="/today" replace />} />
        </Route>
    </Routes>
  )
}


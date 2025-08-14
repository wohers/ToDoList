import { Navigate, Route, Routes } from "react-router-dom"
import { LayoutWithSlider } from "../layouts/LayoutWithSlider"
import { Completed, Incoming, Today } from "../../pages"
import { Upcoming } from "../../pages/upcoming/Upcoming"

export const Router = () => {
  return (
    <Routes>
        <Route element={<LayoutWithSlider />}>
            <Route path="/today" element={<Today />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/incoming" element={<Incoming />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="*" element={<Navigate to="/today" replace />} />
        </Route>
    </Routes>
  )
}


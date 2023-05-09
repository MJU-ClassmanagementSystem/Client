import { Route, Routes } from 'react-router-dom'
import ManageAttendancePage from 'src/pages/ManageAttendance'
import ManageClassPage from 'src/pages/ManageClass'
import ManageStudent from 'src/pages/ManageStudent'

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/manageStudent" element={<ManageStudent />} />
      <Route path="/manageClass" element={<ManageClassPage />} />
      <Route path="/manageAttendance" element={<ManageAttendancePage />} />
    </Routes>
  )
}

export default MainRoute

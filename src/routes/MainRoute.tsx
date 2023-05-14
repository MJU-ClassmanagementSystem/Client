import { Navigate, Route, Routes } from 'react-router-dom'
import ManageAttendancePage from 'src/pages/ManageAttendance'
import ManageClassPage from 'src/pages/ManageClass'
import ManageStudent from 'src/pages/ManageStudent'

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/manageAttendance" element={<Navigate to="/manageAttendance/1" />} />
      <Route path="/manageClass" element={<Navigate to="/manageClass/1" />} />
      <Route path="/manageStudent" element={<Navigate to="/manageAttendance/1" />} />
      <Route path="/manageStudent/:week" element={<ManageStudent />} />
      <Route path="/manageClass/:week" element={<ManageClassPage />} />
      <Route path="/manageAttendance/:week" element={<ManageAttendancePage />} />
    </Routes>
  )
}

export default MainRoute

import { Navigate, Route, Routes } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import Modal from 'src/components/features/Modal'
import ManageAttendancePage from 'src/pages/ManageAttendance'
import ManageClassPage from 'src/pages/ManageClass'
import ManageStudent from 'src/pages/ManageStudent'
import { modalState } from 'src/recoil/atom'

const MainRoute = () => {
  const { isOpened, name } = useRecoilValue(modalState)

  return (
    <>
      {isOpened && <Modal name={name} />}
      <Routes>
        <Route path="/manageAttendance" element={<Navigate to="/manageAttendance/1" />} />
        <Route path="/manageClass" element={<Navigate to="/manageClass/1" />} />
        <Route path="/manageStudent" element={<Navigate to="/manageStudent/1/1" />} />
        <Route path="/manageStudent/:studentId/:week" element={<ManageStudent />} />
        <Route path="/manageClass/:week" element={<ManageClassPage />} />
        <Route path="/manageAttendance/:week" element={<ManageAttendancePage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  )
}

export default MainRoute

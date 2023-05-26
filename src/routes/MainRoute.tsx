import { Navigate, Route, Routes } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import Modal from 'src/components/features/Modal'
import ManageAttendancePage from 'src/pages/ManageAttendance'
import ManageClassPage from 'src/pages/ManageClass'
import ManageStudent from 'src/pages/ManageStudent'
import RegisterStudents from 'src/pages/RegisterStudents'
import { modalState } from 'src/recoil/atom'

const MainRoute = () => {
  const { isOpened, name } = useRecoilValue(modalState)

  return (
    <>
      {isOpened && <Modal name={name} />}
      <Routes>
        <Route path="/manageStudent" element={<ManageStudent />} />
        <Route path="/manageClass" element={<ManageClassPage />} />
        <Route path="/manageAttendance" element={<ManageAttendancePage />} />
        <Route path="/registerUserFace" element={<RegisterStudents />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  )
}

export default MainRoute

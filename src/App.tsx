import { Route, Routes } from 'react-router-dom'

import MainLayout from './components/layout/MainLayout'
import DetectStudents from './pages/DetectStudents'
import NotFoundPage from './pages/NotFound'
import RegisterStudents from './pages/RegisterStudents'
import SignInPage from './pages/SignIn'
import SignUpPage from './pages/SignUp'
import WelcomePage from './pages/WelcomePage'
import MainRoute from './routes/MainRoute'
import ProtectedRoute from './routes/ProtectedRoute'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="signIn" element={<SignInPage />} />
      <Route path="signUp" element={<SignUpPage />} />
      <Route path="register" element={<RegisterStudents />} />
      <Route path="detect" element={<DetectStudents />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="registerUserFace" element={<RegisterStudents />} />
        <Route element={<MainLayout />}>
          <Route path="*" element={<MainRoute />} />
        </Route>
      </Route>
      <Route path="404" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App

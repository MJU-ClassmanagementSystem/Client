import { Route, Routes } from 'react-router-dom'

import MainLayout from './components/layout/MainLayout'
import NotFoundPage from './pages/NotFound'
import RegisterUserFacePage from './pages/RegisterUserFace'
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
      <Route path="registerUserFace" element={<RegisterUserFacePage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainLayout />}>
          <Route path="*" element={<MainRoute />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App

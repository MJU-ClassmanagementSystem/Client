import { Route, Routes } from 'react-router-dom'

import MainPage from './pages/Main'
import NotFoundPage from './pages/NotFound'
import RegisterUserFacePage from './pages/RegisterUserFace'
import SignInPage from './pages/SignIn'
import SignUpPage from './pages/SignUp'
import WelcomePage from './pages/WelcomePage'
import ProtectedRoute from './routes/ProtectedRoute'

const App = () => {
  return (
    <Routes>
      <Route path="welcome" element={<WelcomePage />} />
      <Route path="signIn" element={<SignInPage />} />
      <Route path="signUp" element={<SignUpPage />} />
      <Route path="registerUserFace" element={<RegisterUserFacePage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App

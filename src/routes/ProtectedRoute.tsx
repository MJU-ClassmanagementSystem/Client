import { Navigate, Outlet } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { authState } from 'src/recoil/atom'

const ProtectedRoute = () => {
  const [auth] = useRecoilState(authState)

  if (!auth) return <Navigate to="/signIn" />

  return <Outlet />
}

export default ProtectedRoute

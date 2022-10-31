/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `srcmodules/Auth/pages/AuthPage`, `srcBasePage`).
 */
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import {PrivateRoutes} from './PrivateRoutes'
import {ErrorsPage} from 'features/errors/ErrorsPage'
import {AuthPage, Logout} from 'features/auth'
import { App } from '../App'
import { useAuth0 } from "@auth0/auth0-react";

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const {PUBLIC_URL} = process.env

function AppRoutes() {
  const { isAuthenticated } = useAuth0();
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
          {isAuthenticated ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to='/dashboards' />} />
            </>
          ) : (
            <>
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export {AppRoutes}

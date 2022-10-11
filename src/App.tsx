import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {I18nProvider} from 'i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from 'layout/core'
import {MasterInit} from 'layout/MasterInit'
import AuthInit from './features/auth/redux/AuthInit'
import Auth0ProviderWithHistory from "features/auth/auth0-provider";

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <Auth0ProviderWithHistory>
          <AuthInit>
            <Outlet />
            <MasterInit />
            </AuthInit>
          </Auth0ProviderWithHistory>            
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}
export {App}

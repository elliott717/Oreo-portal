import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {I18nProvider} from 'i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from 'layout/core'
import {MasterInit} from 'layout/MasterInit'
import Auth0ProviderWithHistory from "features/auth/auth0-provider"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({  
  uri: process.env.REACT_APP_TEMP_SERVER_API,
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <ApolloProvider client={client}>
            <Auth0ProviderWithHistory>
              <Outlet />
              <MasterInit />
            </Auth0ProviderWithHistory>      
          </ApolloProvider>      
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}
export {App}

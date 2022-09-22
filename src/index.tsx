// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client'
// Redux
// https://github.com/rt2zz/redux-persist
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import * as _redux from 'setup'
import store, {persistor} from 'setup/redux/Store'
// Axios
import axios from 'axios'

// Apps
import {GoodI18nProvider} from 'i18n/Goodi18n'
/**
 * TIP: Replace this style import with dark styles to enable dark mode
 *
 * import './assets/sass/style.dark.scss'
 *
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './assets/css/style.rtl.css'
 **/
import './assets/sass/style.scss'
import './assets/sass/plugins.scss'
import './assets/sass/style.react.scss'
import {AppRoutes} from 'routing/AppRoutes'

/**
 * Inject Good interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
_redux.setupAxios(axios, store)

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <GoodI18nProvider>
    <Provider store={store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  </GoodI18nProvider>
)

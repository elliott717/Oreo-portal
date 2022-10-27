import {lazy, Suspense} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {MasterLayout} from 'layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardsPageWrapper} from 'pages/dashboards/DashboardsPageWrapper'
import {RocketsPage} from 'pages/Rockets/RocketsPage'
import {getCSSVariableValue} from 'assets/ts/_utils'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../features/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../features/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../features/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../features/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../features/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../features/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registration */}
        <Route path='auth/*' element={<Navigate to='/dashboards' />} />
        {/* Pages */}
        <Route path='dashboards/*' element={<DashboardsPageWrapper />} />
        <Route path='rockets/*' element={<RocketsPage />} />
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

function SuspensedView({children}: any) {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}

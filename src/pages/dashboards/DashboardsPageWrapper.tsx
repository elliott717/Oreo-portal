import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from 'layout/core'
import {Default} from './Default'

const dashboardBreadCrumbs: Array<PageLink> = [
  {
    title: 'Dashboards',
    path: '/dashboards',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

function DashboardsPageWrapper() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='default'
          element={
            <>
              <PageTitle breadcrumbs={dashboardBreadCrumbs}>Default</PageTitle>
              <Default />
            </>
          }
        />
        <Route index element={<Navigate to='/dashboards/default' />} />
      </Route>
    </Routes>
  )
}

export {DashboardsPageWrapper}

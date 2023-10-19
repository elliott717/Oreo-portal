import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from 'layout/core'
import {Rockets} from './Rockets'

const rocketsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Rockets',
    path: '/rockets',
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

function RocketsPage() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='default'
          element={
            <>
              <PageTitle breadcrumbs={rocketsBreadCrumbs}>Default</PageTitle>
              <Rockets />
            </>
          }
        />
        <Route index element={<Navigate to='/rockets/default' />} />
      </Route>
    </Routes>
  )
}

export {RocketsPage}

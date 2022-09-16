import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  return (
    <>
      <AsideMenuItemWithSub
        to='/dashboards'
        title='Dashboards'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/arrows/arr001.svg'
      >
        <AsideMenuItem to='/dashboards/default' title='Admin' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Customers'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/arrows/arr001.svg'
      >
        <AsideMenuItem to='/customers/search' title='Search' hasBullet={true} />
        <AsideMenuItem to='/customers/new' title='New' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Products'
        icon='/media/icons/duotune/arrows/arr001.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/products/search' title='Search' hasBullet={true} />
        <AsideMenuItem to='/products/new' title='New' hasBullet={true} />
      </AsideMenuItemWithSub>
    </>
  )
}

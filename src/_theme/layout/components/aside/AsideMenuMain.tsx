import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'
import {KTSVG} from '../../../helpers'

export function AsideMenuMain() {
  return (
    <>
      <AsideMenuItemWithSub
        to='/dashboards'
        title='Dashboards'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/arrows/arr001.svg'
      >
        <AsideMenuItem to='/dashboards/default' title='Default' hasBullet={true} />
        <AsideMenuItem to='/dashboards/marketing' title='Marketing' hasBullet={true} />
        <AsideMenuItem to='/dashboards/social' title='Social' hasBullet={true} />
        <AsideMenuItem to='/dashboards/eCommerce' title='eCommerce' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Policy'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/arrows/arr001.svg'
      >
        <AsideMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <AsideMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} />
          <AsideMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <AsideMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Claim'
        icon='/media/icons/duotune/arrows/arr001.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/error'
        title='Customer'
        fontIcon='bi-sticky'
        icon='/media/icons/duotune/arrows/arr001.svg'
      >
        <AsideMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/apps/chat'
        title='Product'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/arrows/arr001.svg'
      >
        <AsideMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotune/arrows/arr001.svg'
        title='Layout Builder'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/apps/user-management/'
        icon='/media/icons/duotune/arrows/arr001.svg'
        title='User Management'
        fontIcon='bi-layers'
      />

    </>
  )
}

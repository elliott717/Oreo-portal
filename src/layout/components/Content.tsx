import React, {useEffect} from 'react'
import clsx from 'clsx'
import {useLocation} from 'react-router'
import {useLayout} from '../core'
import {DrawerComponent} from 'assets/ts/components'

function Content({children}: any) {
  const {classes} = useLayout()
  const location = useLocation()
  useEffect(() => {
    DrawerComponent.hideAll()
  }, [location])

  return (
    <div id='kt_content_container' className={clsx(classes.contentContainer.join(' '))}>
      {children}
    </div>
  )
}

export {Content}

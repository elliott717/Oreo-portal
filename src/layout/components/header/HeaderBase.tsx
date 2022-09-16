import HeaderTopbar from './HeaderTopbar'
import {KTSVG, toAbsoluteUrl} from 'helpers'
import {Link} from 'react-router-dom'
const HeaderBase = () => {
  return (
    <div id='kt_header' className='header align-items-stretch'>
      <div className='header-brand'>
        <Link to='/'>
          <img alt='Logo' src={toAbsoluteUrl('/media/logos/default.svg')} className='h-25px' />
        </Link>

        <div className='d-flex align-items-center d-lg-none ms-n3 me-1' title='Show aside menu'>
          <div
            className='btn btn-icon btn-active-color-primary w-30px h-30px'
            id='kt_aside_mobile_toggle'
          >
            <KTSVG path='/media/icons/duotune/abstract/abs015.svg' className='svg-icon-1' />
          </div>
        </div>
      </div>

      <div className='topbar'>
        <HeaderTopbar />
      </div>
    </div>
  )
}

export default HeaderBase

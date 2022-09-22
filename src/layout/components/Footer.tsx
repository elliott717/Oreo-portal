/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useLayout} from '../core'

function Footer() {
  const {classes} = useLayout()
  return (
    <div className='footer py-4 d-flex flex-lg-column' id='kt_footer'>
      <div
        className={`${classes.footerContainer} d-flex flex-column flex-md-row align-items-center justify-content-between`}
      >
        <div className='text-dark order-2 order-md-1'>
          <span className='text-muted fw-bold me-1'>{new Date().getFullYear()} &copy;</span>
          <a href='#' target='_blank' className='text-gray-800 text-hover-primary'>
            Oreo
          </a>
        </div>
        <ul className='menu menu-gray-600 menu-hover-primary fw-bold order-1'>
          <li className='menu-item'>
            <a href='#' target='_blank' className='menu-link px-2'>
              About
            </a>
          </li>

          <li className='menu-item'>
            <a href='#' target='_blank' className='menu-link px-2'>
              Support
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

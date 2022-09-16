import {useState} from 'react'
import {KTSVG} from 'helpers'
import {Main} from 'shared'

function AsideToolbar() {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className='d-flex align-items-center flex-stack'>
        {/* eslint-disable-next-line */}
        <button
          className='btn btn-icon btn-custom border-0 fw-bolder flex-shrink-0 ms-3'
          onClick={() => {
            setShow(true)
          } }
        >
          <KTSVG path='/media/icons/duotune/arrows/arr087.svg' className='svg-icon-2qx' />
        </button>
      </div>

      <Main
        show={show}
        handleClose={() => {
          setShow(false)
        } } />
    </>
  )
}

export default AsideToolbar

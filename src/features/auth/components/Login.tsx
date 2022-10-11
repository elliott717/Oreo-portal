/* eslint-disable jsx-a11y/anchor-is-valid */
import {toAbsoluteUrl} from 'helpers'
import { useAuth0 } from "@auth0/auth0-react";

export function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      {/* begin::Heading */}
      <div className='text-center mb-10'>
        <h1 className='text-dark mb-3'>Sign In to OreoUI</h1>
      </div>
      {/* begin::Heading */}

      {/* begin::Action */}
      <div className='text-center'>
        <button
          className='btn btn-lg btn-primary w-100 mb-5'
          onClick={() => loginWithRedirect()}
        >
        Login
        </button>

        {/* begin::Separator */}
        <div className='text-center text-muted text-uppercase fw-bolder mb-5'>or</div>
        {/* end::Separator */}

        {/* begin::Google link */}
        <a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100 mb-5'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
            className='h-20px me-3'
          />
          Continue with Google
        </a>
        {/* end::Google link */}
      </div>
      {/* end::Action */}
    </>
  )
}

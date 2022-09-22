type Props = {
  last_login?: string
}

function UserLastLoginCell({last_login}: Props) {
  return <div className='badge badge-light fw-bolder'>{last_login}</div>
}

export {UserLastLoginCell}

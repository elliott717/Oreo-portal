import {IconUserModel} from '../ProfileModels'
import {toAbsoluteUrl} from 'helpers'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'

type Props = {
  users?: Array<IconUserModel>
}

function UsersList({users = undefined}: Props) {
  return (
    <>
      {users &&
        users.map((user, i) => {
          return (
            <OverlayTrigger
              key={`${i}-${user.name}`}
              placement='top'
              overlay={<Tooltip id='tooltip-user-name'>{user.name}</Tooltip>}
            >
              <div className='symbol symbol-35px symbol-circle'>
                {user.avatar && <img src={toAbsoluteUrl(user.avatar)} alt='Pic' />}
                {user.initials && (
                  <span className='symbol-label bg-primary text-inverse-primary fw-bolder'>
                    {user.initials}
                  </span>
                )}
              </div>
            </OverlayTrigger>
          )
        })}
    </>
  )
}

export {UsersList}

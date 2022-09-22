type Props = {
  two_steps?: boolean
}

function UserTwoStepsCell({two_steps}: Props) {
  return <> {two_steps && <div className='badge badge-light-success fw-bolder'>Enabled</div>}</>
}

export {UserTwoStepsCell}

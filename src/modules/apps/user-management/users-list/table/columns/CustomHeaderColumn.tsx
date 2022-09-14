import {ColumnInstance} from 'react-table'
import {User} from '../../core/_models'

type Props = {
  column: ColumnInstance<User>
}

function CustomHeaderColumn({ column }: Props) {
  return (
    <>
      {column.Header && typeof column.Header === 'string' ? (
        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
      ) : (
        column.render('Header')
      )}
    </>
  )
}

export {CustomHeaderColumn}

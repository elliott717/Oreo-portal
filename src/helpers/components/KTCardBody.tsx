import clsx from 'clsx'

type Props = {
  className?: string
  scroll?: boolean
  height?: number
  children: React.ReactNode
}

function KTCardBody(props: Props) {
  const {className, scroll, height, children} = props
  return (
    <div
      className={clsx(
        'card-body',
        className && className,
        {
          'card-scroll': scroll,
        },
        height && `h-${height}px`
      )}
    >
      {children}
    </div>
  )
}

export {KTCardBody}

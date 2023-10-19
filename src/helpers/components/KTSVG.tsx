import SVG from 'react-inlinesvg'
import {toAbsoluteUrl} from '../AssetHelpers'

type Props = {
  className?: string
  path: string
  svgClassName?: string
}

function KTSVG({className = '', path, svgClassName = 'mh-50px'}: Props) {
  return (
    <span className={`svg-icon ${className}`}>
      <SVG src={toAbsoluteUrl(path)} className={svgClassName} />
    </span>
  )
}

export {KTSVG}

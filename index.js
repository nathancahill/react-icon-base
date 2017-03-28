import React from 'react'

const IconBase = ({ children, color, size, style, ...props }, { reactIconBase = {} }) => {
  const computedSize = size || reactIconBase.size || '1em'
  return (
    <svg
      children={children}
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      height={computedSize}
      width={computedSize}
      {...reactIconBase}
      {...props}
      style={{
        verticalAlign: 'middle',
        color: color || reactIconBase.color,
        ...(reactIconBase.style || {}),
        ...style
      }}
    />
  )
}

IconBase.propTypes = {
  color: React.PropTypes.string,
  size: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  style: React.PropTypes.object
}

IconBase.contextTypes = {
  reactIconBase: React.PropTypes.shape(IconBase.propTypes)
}

export default IconBase

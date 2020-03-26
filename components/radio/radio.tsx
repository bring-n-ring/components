import React, { FC } from 'react'

import './radio.css'

type RadioProps = {
  labelProps?: React.HTMLAttributes<HTMLLabelElement>
} & React.HTMLAttributes<HTMLInputElement>

export const Radio: FC<RadioProps> = ({ labelProps, children, ...rest }) => {
  return (
    <label className={'customRadio'} {...labelProps}>
      {children}
      <input type="checkbox" {...rest} />
      <span />
    </label>
  )
}

import React, { FC } from 'react'

type SpacerProps = {
  multiply?: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

  cssProperty?: string
  type?: 'within' | 'around'
} & React.HTMLAttributes<HTMLDivElement>
import './spacer.css'

export const Spacer: FC<SpacerProps> = ({
  multiply = 1,
  type = 'around',
  children,
  className = '',
  ...rest
}) => {
  if (type === 'around') {
    return <div className={`around${multiply} ${className}`} {...rest} />
  }
  return (
    <div className={`within${multiply} ${className}`} {...rest}>
      {children}
    </div>
  )
}

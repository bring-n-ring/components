import React, { FC } from 'react'

type SpacerProps = {
  multiply?: number
  cssProperty?: string
  type?: 'within' | 'around'
} & React.HTMLAttributes<HTMLDivElement>

export const Spacer: FC<SpacerProps> = ({
  multiply = 1,
  cssProperty = '--base-spacing',
  type = 'around',
  children,
  style = {},
  ...rest
}) => {
  let styles = getComputedStyle(document.documentElement)
  let spacing = parseInt(styles.getPropertyValue(cssProperty))
  if (type === 'around') {
    return (
      <div style={{ ...style, margin: `${spacing * multiply}px` }} {...rest} />
    )
  }
  return (
    <div style={{ ...style, padding: `${spacing * multiply}px` }} {...rest}>
      {children}
    </div>
  )
}

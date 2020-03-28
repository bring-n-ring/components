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
  const styles =
    typeof window !== 'undefined'
      ? getComputedStyle(document.documentElement)
      : null
  const spacing = styles ? parseInt(styles.getPropertyValue(cssProperty)) : 0
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

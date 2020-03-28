import React, { FC } from 'react'

import './typography.css'

type TypographyProps = {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'fineprint'
  elem?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  color?: 'background' | 'foreground' | 'primary' | 'secondary' | 'tertiary'
} & React.HTMLAttributes<HTMLDivElement>

export const Typography: FC<TypographyProps> = ({
  size = 'p',
  elem,
  children,
  className = '',
  color = 'foreground',
  style = {},
  ...rest
}) => {
  const computedElem = size !== 'small' && size !== 'fineprint' ? size : 'p'
  const Elem = !elem ? computedElem : elem
  const styles =
    typeof window !== 'undefined'
      ? getComputedStyle(document.documentElement)
      : null
  const colorValue = styles
    ? styles.getPropertyValue(`--color-${color}`)
    : '#000'
  return (
    <Elem
      style={{ ...style, color: colorValue }}
      className={`${size} customTypography ${className}`.trim()}
      {...rest}
    >
      {children}
    </Elem>
  )
}

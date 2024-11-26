import { ReactNode } from 'react'

import style from './style.module.scss'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label?: string
  children?: ReactNode
  footer?: ReactNode
}

export const FieldBox = ({ label, children, footer, ...props }: Props) => (
  <div
    className={style.box}
    {...props}
  >
    {label && <label className={style.label}>{label}</label>}
    <div className={style.content}>{children}</div>
    {footer && <div>{footer}</div>}
  </div>
)

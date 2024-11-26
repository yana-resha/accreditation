import { ReactNode } from 'react'

import style from './style.module.scss'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode
  label?: string
}

export const GridBox = ({ children, label, ...props }: Props) => (
  <div
    className={style.gridBox}
    {...props}
  >
    <div className={style.label}>{label}</div>
    <div className={style.content}>{children}</div>
  </div>
)

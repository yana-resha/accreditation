import { ReactNode } from 'react'

import classNames from 'classnames'

import style from './style.module.scss'

interface Props
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isLoading?: boolean
  children: ReactNode | string
}

export const BlueButton = ({ isLoading, children, className, ...otherProps }: Props) => (
  <button
    {...otherProps}
    className={classNames(style.regularBtn, className)}
  >
    {isLoading ? (
      <div className={style.loading}>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
      </div>
    ) : (
      children
    )}
  </button>
)

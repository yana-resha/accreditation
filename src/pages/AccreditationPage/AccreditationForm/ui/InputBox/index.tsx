import { ReactNode } from 'react'

import classNames from 'classnames'

import style from './style.module.scss'
import { DeleteFieldBtn } from '../DeleteFieldBtn'

interface Props {
  children: ReactNode
  isError?: boolean
  subtitle?: string
  error?: string
  deleteFunc?: () => void
}

export const InputBox = ({ children, isError, subtitle, error, deleteFunc }: Props) => (
  <div
    className={classNames(style.inputBox, {
      [style.invalid]: isError,
    })}
  >
    <div className={style.content}>
      {children}
      {((isError && error) || subtitle) && (
        <div className={style.subtitle}>{isError && error ? error : subtitle}</div>
      )}
    </div>
    {deleteFunc && (
      <div className={style.actions}>
        <DeleteFieldBtn onClick={deleteFunc} />
      </div>
    )}
  </div>
)

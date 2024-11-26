import { ReactNode } from 'react'

import style from './style.module.scss'

export const BlueTextBox = ({ children }: { children: ReactNode }) => (
  <div className={style.box}>{children}</div>
)

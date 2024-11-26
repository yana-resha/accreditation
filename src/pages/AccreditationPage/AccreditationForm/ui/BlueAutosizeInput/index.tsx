import classNames from 'classnames'
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize'

import style from './style.module.scss'

export const BlueAutosizeInput = ({ invalid, ...props }: TextareaAutosizeProps & { invalid?: boolean }) => (
  <div className={style.inputContainer}>
    <TextareaAutosize
      {...props}
      className={classNames(style.input, {
        [style.invalid]: invalid,
      })}
    />
    <div className={style.actionStyles}></div>
  </div>
)

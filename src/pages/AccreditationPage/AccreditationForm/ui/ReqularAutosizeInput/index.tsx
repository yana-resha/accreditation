import classNames from 'classnames'
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize'

import style from './style.module.scss'

export const ReqularAutosizeInput = ({
  invalid,
  ...props
}: TextareaAutosizeProps & { invalid?: boolean }) => (
  <div
    className={classNames(style.inputContainer, {
      [style.disabled]: false,
    })}
  >
    <TextareaAutosize
      className={classNames(style.input, {
        [style.invalid]: invalid,
      })}
      {...props}
    />
    <div className={style.actionStyles}></div>
  </div>
)

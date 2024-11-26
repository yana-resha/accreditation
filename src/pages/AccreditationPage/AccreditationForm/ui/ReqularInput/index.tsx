import classNames from 'classnames'

import style from './style.module.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  invalid?: boolean
}

export const ReqularInput = ({ invalid, ...props }: Props) => (
  <div className={style.inputContainer}>
    <input
      onWheel={(e) => e.currentTarget.blur()}
      {...props}
      className={classNames(style.input, {
        [style.invalid]: invalid,
      })}
    />
    <div className={style.actionStyles}></div>
  </div>
)

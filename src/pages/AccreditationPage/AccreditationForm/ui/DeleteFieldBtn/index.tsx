import style from './style.module.scss'
import BasketIcon from '@/shared/assets/images/basket.svg?react'

export const DeleteFieldBtn = ({ onClick }: { onClick: () => void }) => (
  <button
    className={style.btn}
    onClick={onClick}
  >
    <BasketIcon className={style.icon} />
  </button>
)

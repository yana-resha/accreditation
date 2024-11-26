import style from './style.module.scss'
import PlusIcon from '@/shared/assets/images/plus.svg?react'

interface Props {
  onClick: () => void
}

export const AddFieldBtn = ({ onClick }: Props) => (
  <button
    className={style.btn}
    onClick={onClick}
  >
    <PlusIcon className={style.btnIcon} />
    Добавить
  </button>
)

import { Link } from 'react-router-dom'

import style from './style.module.scss'
import { DEFAULT_QUESTIONS, DEFAULT_TASKS } from '@/entities/accreditation/config'
import checkImg from '@/shared/assets/images/check-mark.png'

export const StartPage = () => (
  <section className={style.pageLayout}>
    <div className={style.container}>
      <div className={style.startContainer}>
        <div className={style.startHeader}>
          <img
            src={checkImg}
            className={style.checkImg}
          />
          <div>
            <div className={style.headerTitle}>{DEFAULT_TASKS} задачи</div>
            <div className={style.headerSubtitle}>по {DEFAULT_QUESTIONS} вопросов</div>
          </div>
        </div>
        <div className={style.startContent}>
          <div className={style.contentTitle}>Первичная аккредитация</div>
          <div className={style.actionContainer}>
            <div className={style.contentSubtitle}>
              По специальности <br /> «Кардиология»
            </div>
            <Link
              className={style.navigateLink}
              to="/accreditation"
            >
              Начать
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)

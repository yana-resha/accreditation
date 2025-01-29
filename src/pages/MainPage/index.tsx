import { Link } from 'react-router-dom'

import style from './style.module.scss'
import gigachatLogo from '@/shared/assets/images/gigachat-big.png'
import univercityLogo from '@/shared/assets/images/univercity-logo.png'

export const MainPage = () => (
  <section className={style.pageLayout}>
    <Link
      className={style.pageLink}
      to="/start"
    >
      <div className={style.container}>
        <img
          src={gigachatLogo}
          className={style.gigachatLogo}
        />

        <div className={style.contentLayout}>
          <img
            className={style.univercityLogo}
            src={univercityLogo}
          />

          <div className={style.content}>
            <div className={style.title}>Первичная аккредитация</div>
            <div className={style.subtitle}>по специальности «Кардиология»</div>
          </div>
        </div>
      </div>
    </Link>
  </section>
)

import { AccreditationForm } from './AccreditationForm'
import style from './style.module.scss'
import gigachatImg from '@/shared/assets/images/gigachat-regular.png'
import univercityLogo from '@/shared/assets/images/univercity-reqular.png'

export const AccreditationPage = () => (
  <section className={style.pageLayout}>
    <div className={style.container}>
      <div className={style.menu}>
        <div className={style.menuHeader}>
          <a
            className={style.univercityLink}
            href="https://www.volgmed.ru/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={univercityLogo} />
          </a>
          <div className={style.headerTitle}>Первичная аккредитация</div>
          <div className={style.headerSubtitle}>по специальности «Кардиология»</div>
        </div>
        <div className={style.menuFooter}>
          <a
            className={style.gigachatLink}
            href="https://giga.chat/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={gigachatImg}
              className={style.gigachatLogo}
            />
            {new Date().toLocaleString('default', { month: 'long' })}, {new Date().getFullYear()}
          </a>
        </div>
      </div>
      <div className={style.contentLayout}>
        <AccreditationForm />
      </div>
    </div>
  </section>
)

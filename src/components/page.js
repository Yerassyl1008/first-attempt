import Image from "next/image"
import styles from './sidebar.module.css'

export default function Sidebar() {
  return <>
  <div className={styles.sidebar}>
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__logo">
          <Image src="icons\Frame (2).svg" width={300} height={300} id="sidebarLogo" alt="img"/>
        </div>

        <div className="siderbar__user">
          <img src="imgs/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="person" className="sidebar__img" />
          <div className="sidebar__people">
            <p className="sibebar__name">Диана Капарова</p>
            <p className="sidebar__admin">Админ</p>
          </div>
          <Image src="icons/first.svg" alt="qwe" className="sidebar__tag" width={300} height={300} />
        </div>

        <div className="sidebar__menu">
          <a href="#!" className="menu__item">
            <Image src="icons\Icon.svg" alt="icon" className="menu__icon" width={300} height={300} />
            <span>Клиенты</span>
          </a>

          <a href="#!" className="menu__item">
            <Image src="icons\Icon-2.svg" alt="icon" className="menu__icon" width={300} height={300}/>
            <span>Отчеты</span>
          </a>

          <div className="menu__item__d1 ">
            <div className="menu__left menu__item">
              <Image src="icons\Icon-3.svg" alt="icon" className="menu__icon" width={300} height={300}/>
              <span>Фитнес</span>
            </div>
            <Image src="icons\Path (Stroke).svg" alt="icon" width={300} height={300}/>
          </div>

          <div className="menu__item__d2">
            <div className="menu__left2">
              <Image src="icons\Icon-4.svg" alt="icon" className="menu__icon" width={300} height={300}/>
              <span>Контроль Качества</span>
            </div>
            <Image src="icons\Path (Stroke).svg" alt="icon" className="icons__img" width={300} height={300}/>
          </div>

          <div className="menu__item__d3">
            <button className="menu-toggle">
              <Image src="icons/Icon-5.svg" alt="" className="menu__icon" width={300} height={300}/>
              <span className="menu-text">Продажи</span>
              <Image src="icons/Path (Stroke).svg" alt="icon" className="arrow" width={300} height={300}/>
            </button>
            
            <ul className="submenu">
              <li><button className="open-form-btn side__button">Абонементы</button></li>
              <li><button className="side__button">Услуги</button></li>
              <li><button className="side__button">Товары</button></li>
              <li><button className="side__button">Промокоды</button></li>
            </ul>
          </div>

          <div className="menu__item__d1 ">
            <div className="menu__left menu__item">
              <Image src="icons\Icon-6.svg" alt="icon" className="menu__icon" width={300} height={300}/>
              <span>Сотрудники</span>
            </div>
        
          </div>

          <div className="menu__item__d1 ">
            <div className="menu__left menu__item">
              <Image src="icons\Icon-7.svg" alt="icon" className="menu__icon" width={300} height={300}/>
              <span>Доступы</span>
            </div>
        
          </div>

          <div className="menu__item__d1 ">
            <div className="menu__left menu__item">
              <Image src="icons\Icon-8.svg" alt="icon" className="menu__icon" width={300} height={300}/>
              <span>Маркетинг</span>
            </div>
        
          </div>

          <div className="menu__item__d1 ">
            <div className="menu__left menu__item">
              <Image src="icons\Icon-9.svg" alt="icon" className="menu__icon" width={300} height={300}/>
              <span>Клуб</span>
            </div>
        
          </div>

          <div className="menu__item__d1 ">
            <div className="menu__left menu__item">
              <Image src="icons\Icon-10.svg" alt="icon" className="menu__icon" width={300} height={300}/>
              <span>Проекты</span>
            </div>
          </div>

          <div className="menu__item__d1 ">
            <div className="menu__left menu__item">
              <Image src="icons\Icon-11.svg" alt="icon" className="menu__icon" width={300} height={300}/>
              <span>Сервер</span>
            </div>
          </div>

          <div className="menu__item__d1 ">
            <div className="menu__left menu__item">
              <Image src="icons\Vector-12.svg" alt="icon" className="menu__icon" width={300} height={300}/>
              <span>Заказы Kaspi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
}


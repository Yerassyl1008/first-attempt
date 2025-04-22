"use client"

import Image from "next/image"
import styles from './sidebar.module.css'
import { useEffect } from "react";

export default function Sidebar() {


  useEffect(() => {
    const abonementsBtn = document.getElementById("open-form-btn");
    if (abonementsBtn) {
      abonementsBtn.addEventListener("click", () => {
        setIsFormOpen(true);
      });
    }
  
    return () => {
      if (abonementsBtn) {
        abonementsBtn.removeEventListener("click", () => setIsFormOpen(true));
      }
    };
  }, []);
  
  return <>
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__logo">
          <Image src="/Frame 1.svg" width={94} height={14} id="sidebarLogo" alt="img" className="siderbar__logo"/>
        </div>

        <div className="siderbar__user">
          <img src="/niggo.jpg" alt="person" className="sidebar__img" />
          <div className="sidebar__people">
            <p className="sibebar__name">Диана Капарова</p>
            <p className="sidebar__admin">Админ</p>
          </div>
          <Image src="/20-more-vertical (1).svg" alt="qwe" className="sidebar__tag" width={10} height={10} />
        </div>

        <div className="sidebar__menu">

        <div className="menu__wrapper"> 
          <a href="#!" className="menu__item">
            <Image src="/20-user-check.svg" alt="icon" className="menu__icon" width={20} height={20} />
            <span>Клиенты</span>
          </a>
        </div>


        <div className="menu__wrapper">
        <a href="#!" className="menu__item">
            <Image src="/20-file.svg" alt="icon" className="menu__icon menu__icon-work " width={20} height={20}/>
            <span >Отчеты</span>
          </a>
        </div>
         

        <div className="menu__wrapper "> 
          <div className="menu__item ">
            <Image src="/20-accesibility.svg" alt="icon" className="menu__icon" width={20} height={20}/>
            <span>Фитнес</span>
          </div>
          <Image src="/Icon_Arrow Down A.svg" className="icons__img123" alt="icon" width={14} height={8}/>
        </div>
         
          <div className="menu__wrapper">
            <div className="menu__item">
              <Image src="/20-check-circle.svg" alt="icon" className="menu__icon sales" width={20} height={20}/>
              <span className="control">Контроль Качества</span>
            </div>
            <Image src="/Icon_Arrow Down A.svg" alt="icon" className="icons__img" width={14} height={8}/>
          </div>

          <div className="menu__wrapper">
            <button className="menu-toggle menu__item">
              <Image src="/20-chart-line.svg" alt="" className="menu__icon sales" width={20} height={20}/>
              <span className="menu-text" id="salesToggle">Продажи</span>
              
            </button>
            <Image src="/Icon_Arrow Down A.svg" alt="icon" className="arrow" width={14} height={8}/>

            <ul className="submenu">
              <li><button className="open-form-btn side__button" onClick={() => setIsFormOpen(true)}>Абонементы</button></li>
              <li><button className="side__button">Услуги</button></li>
              <li><button className="side__button">Товары</button></li>
              <li><button className="side__button">Промокоды</button></li>
            </ul>
          </div>

          <div className="menu__wrapper">
            <div className="menu__item">
              <Image src="/20-users.svg" alt="icon" className="menu__icon" width={20} height={20}/>
              <span>Сотрудники</span>
            </div>
        
          </div>

          <div className="menu__wrapper">
            <div className="menu__left menu__item">
              <Image src="/20-lock.svg" alt="icon" className="menu__icon" width={20} height={20}/>
              <span>Доступы</span>
            </div>
        
          </div>

          <div className="menu__wrapper">
            <div className="menu__left menu__item">
              <Image src="/20-chart-bar.svg" alt="icon" className="menu__icon" width={20} height={20}/>
              <span>Маркетинг</span>
            </div>
        
          </div>

          <div className="menu__wrapper">
            <div className="menu__item">
              <Image src="/20-star.svg" alt="icon" className="menu__icon" width={20} height={20}/>
              <span>Клуб</span>
            </div>
        
          </div>

          <div className="menu__wrapper">
            <div className="menu__item">
              <Image src="/20-folder.svg" alt="icon" className="menu__icon" width={20} height={20}/>
              <span>Проекты</span>
            </div>
          </div>

          <div className="menu__wrapper">
            <div className="menu__item">
              <Image src="/20-layer-three.svg" alt="icon" className="menu__icon" width={20} height={20}/>
              <span>Сервер</span>
            </div>
          </div>

          <div className="menu__wrapper">
            <div className="menu__item">
              <Image src="/Group (1).svg" alt="icon" className="menu__icon" width={20} height={20}/>
              <span className="control__kaspi">Заказы Kaspi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}


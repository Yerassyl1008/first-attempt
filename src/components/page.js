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
          <Image src="/Frame (2).svg" width={120} height={62} id="sidebarLogo" alt="img"/>
        </div>

        <div className="siderbar__user">
          <img src="/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="person" className="sidebar__img" />
          <div className="sidebar__people">
            <p className="sibebar__name">Диана Капарова</p>
            <p className="sidebar__admin">Админ</p>
          </div>
          <Image src="/Icon (5).svg" alt="qwe" className="sidebar__tag" width={10} height={10} />
        </div>

        <div className="sidebar__menu">
          <a href="#!" className="menu__item">
            <Image src="/Icon.svg" alt="icon" className="menu__icon" width={20} height={20} />
            <span>Клиенты</span>
          </a>

          <a href="#!" className="menu__item">
            <Image src="/Icon-2.svg" alt="icon" className="menu__icon menu__icon-work " width={20} height={20}/>
            <span >Отчеты</span>
          </a>

            <div className="menu__left menu__something"> 
              <div className="menu__left2 menu__item">
                <Image src="/Icon-3.svg" alt="icon" className="menu__icon" width={20} height={20}/>
                <span>Фитнес</span>
                <Image src="/Path (Stroke).svg" className="icons__img123" alt="icon" width={14} height={8}/>
              </div>
                
            </div>
         
          <div className="menu__item__d2">
            <div className="menu__left2">
              <Image src="/Icon-4.svg" alt="icon" className="menu__icon sales" width={20} height={20}/>
              <span className="control">Контроль Качества</span>
            </div>
            <Image src="/Path (Stroke).svg" alt="icon" className="icons__img" width={14} height={8}/>
          </div>

          <div className="menu__item__d3">
            <button className="menu-toggle">
              <Image src="/Icon-5.svg" alt="" className="menu__icon sales" width={20} height={20}/>
              <span className="menu-text" id="salesToggle">Продажи</span>
              <Image src="/Path (Stroke).svg" alt="icon" className="arrow" width={14} height={8}/>
            </button>
            
            <ul className="submenu">
              <li><button className="open-form-btn side__button" onClick={() => setIsFormOpen(true)}>Абонементы</button></li>
              <li><button className="side__button">Услуги</button></li>
              <li><button className="side__button">Товары</button></li>
              <li><button className="side__button">Промокоды</button></li>
            </ul>
          </div>

          <div className="menu__item__d1 ">
            <div className="menu__left menu__item">
              <Image src="/Icon-6.svg" alt="icon" className="menu__icon" width={20} height={20}/>
              <span>Сотрудники</span>
            </div>
        
          </div>

          <div className="menu__item__d1 ">
            <div className="menu__left menu__item">
              <Image src="/Icon-7.svg" alt="icon" className="menu__icon" width={20} height={20}/>
              <span>Доступы</span>
            </div>
        
          </div>

          <div className="menu__item__d1 ">
            <div className="menu__left menu__item">
              <Image src="/Icon-8.svg" alt="icon" className="menu__icon" width={20} height={20}/>
              <span>Маркетинг</span>
            </div>
        
          </div>

          <div className="menu__item__d1 ">
            <div className="menu__left menu__item">
              <Image src="/Icon-9.svg" alt="icon" className="menu__icon" width={20} height={20}/>
              <span>Клуб</span>
            </div>
        
          </div>

          <div className="menu__item__d1 ">
            <div className="menu__left menu__item">
              <Image src="/Icon-10.svg" alt="icon" className="menu__icon" width={20} height={20}/>
              <span>Проекты</span>
            </div>
          </div>

          <div className="menu__item__d1 ">
            <div className="menu__left menu__item">
              <Image src="/Icon-11.svg" alt="icon" className="menu__icon" width={20} height={20}/>
              <span>Сервер</span>
            </div>
          </div>

          <div className="menu__item__d1 ">
            <div className="menu__left menu__item">
              <Image src="/Vector-12.svg" alt="icon" className="menu__icon" width={20} height={20}/>
              <span className="control__kaspi">Заказы Kaspi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}


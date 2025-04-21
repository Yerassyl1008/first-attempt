"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function Main() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  useEffect(() => {
    const salesToggle = document.getElementById("salesToggle");
    const submenu = salesToggle?.nextElementSibling;
  
    if (salesToggle && submenu) {
      salesToggle.addEventListener("click", () => {
        submenu.classList.toggle("open");
      });
    }
  
    return () => {
      if (salesToggle && submenu) {
        salesToggle.removeEventListener("click", () => {
          submenu.classList.toggle("open");
        });
      }
    };
  }, []);

  return <>
    <main className="main-content" >
    {isFormOpen && (
      <div className="form-wrapper abonementForm1" id="abonementForm" >
      <div className="content__welcome">
        <h2 className="content__title">Добавление абонемента</h2>

        <span className="open-form-btn main__crest">❌</span>
      </div>
      
      
      <div className="content__info">
        <div className="content__info-first">
          <div className="info__wrapper">
            <Image src="/Progrecc line.svg" alt="" width={100} height={100}/>
            <div className="info__text-wrapper">
              <h2 className="info__title">Основная информация</h2>
              <p className="info__text">Название, тип, клуб, рекуррент и т.д</p>
            </div>
            
          </div>
          <div className="info__wrapper">
            <Image src="/Progrecc line (1).svg" alt=""  width={100} height={100}/>
            <div className="info__text-wrapper">
              <h2 className="info__title">Стартовый пакет</h2>
              <p className="info__text">Заморозки, посещения, гостевые для передачи</p>
            </div>
            
          </div>
          <div className="info__wrapper">
            <Image src="/__Stepper_Circle.svg" alt="" className="info__Image"  width={100} height={100}/>
            <div className="info__text-wrapper">
              <h2 className="info__title">Дополнительно</h2>
              <p className="info__text">Дополнительная информация</p>
            </div>
            
          </div>
        </div>

        <div className="content__info-second">
          <h2 className="second__title">
            Основная Информация
          </h2>

          <div className="content__input-wrapper">
            <h2 className="input__title">Название</h2>
            <input type="text" className="info__input" placeholder="Введите Название" />
          </div>

          <div className="content__input-wrapper">
            <h2 className="input__title">Тип</h2>
            <input type="text" className="info__input" placeholder="Выберите тип" />
          </div>

          <div className="content__input-wrapper">
            <h2 className="input__title">Клуб</h2>
            <input type="text" className="info__input" placeholder="Выберите клуб" />
          </div>

          <div className="info__wrapper-measure">
            <div className="measure__first">
              <h2 className="measure__title">Измерять по</h2>
              <input type="text" className="measure__input" placeholder="Выбрать Изменение" />
            </div>
            <div className="measure__second">
              <h2 className="measure__title">Продолжительность</h2>
              <input type="text" className="measure__input" placeholder="Выбрать данные" />
            </div>
          </div>

          <div className="info__wrapper-measure">
            <div className="measure__first">
              <h2 className="measure__title">График Посещения</h2>
              <input type="text" className="measure__input" placeholder="Дням" />
            </div>
            <div className="measure__second">
              <h2 className="measure__title">Время</h2>
              <input type="text" className="measure__input-data" placeholder="С" />
              <input type="text" className="measure__input-data" placeholder="До" />
            </div>
          </div>

          <div className="switch__wrapper">
            <label className="switch-wrapper">
              <input type="checkbox" className="switch-input" />
              <span className="switch-slider"></span>
              <span className="switch-label">Без ограничений</span>
            </label>
          </div>

          <div className="measure__first">
            <h2 className="measure__title">Рекуррент</h2>
            <input type="text" className="measure__input" placeholder="Выберите Рекуррент" />
          </div>
        </div>

        
        
      </div>
      
    </div>
    )}
      
      






    
      <section className="welcome">
        
        <h1 className="welcome__title">Абономенты</h1>

        
        <div className="welcome__btns">
          <button className="welcome__dowload">
            <Image src="/download.svg" alt="btns"  width={16} height={16}/>
            Скачать
          </button>
          <button className="welcome__abonoment">
            <Image src="/Icon (4).svg" alt="btns"  width={14} height={14}/>
            Добавить Абономент
          </button>
        </div>
      </section>

      <section className="action">
        <div className="action__btns">
          <button className="action__club">
            <Image src="/location.svg" alt="" className="action__icon"  width={18} height={18}/>
            <span>Клуб </span>
            <span>▾</span>
            

          </button>
          <button className="action__continue">
            <Image src="/Icon (1).svg" alt="" className="action__icon"  width={20} height={20}/>
            <span> Продолжительность</span>
            <span>▾</span>
           

          </button>
          <button className="action__type">
            <Image src="/Icon (2).svg" alt="Image"  width={20} height={20}/>
            <span>Тип </span>
            <span>▾</span>
          </button>
          <button className="action__and">
            <span>Еще</span>
            <span>+</span>
            
          </button>
        </div>

        <div className="action__input">
          <Image src="/search.svg" alt="search__icon" className="action__search"  width={100} height={100}/>
          <input type="text" placeholder="Пойск по Названию" />
        </div>
      </section>
      <section className="table1">
        <div className="table">
          <div className="table-header">
            <div className="table-cell checkbox-cell"><input type="checkbox" /></div>
            <div className="table-cell">Название</div>
            <div className="table-cell">Тип</div>
            <div className="table-cell">Клуб</div>
            <div className="table-cell">Продолжительность</div>
            <div className="table-cell">Стоимость</div>
            <div className="table-cell">Рекуррент</div>
            <div className="table-cell">Первоначальный взнос</div>
            <div className="table-cell">Заморозки</div>
            <div className="table-cell">Гостевые</div>
            <div className="table-cell">Доступы</div>
            <div className="table-cell">Услуги</div>
            <div className="table-cell">Десктоп</div>
            <div className="table-cell">Моб.приложение</div>
            <div className="table-cell">График посещения</div>
          </div>
          
          
          
          
          
          
          
          <div className="table-row">
            <div className="table-cell checkbox-cell"><input type="checkbox" /></div>
            <div className="table-cell">3-х месячный аб...</div>
            <div className="table-cell">Fitness</div>
            <div className="table-cell">Samal</div>
            <div className="table-cell">365 дней</div>
            <div className="table-cell">110.000 ₸</div>
            <div className="table-cell">Да</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
          </div>

          <div className="table-row">
            <div className="table-cell checkbox-cell"><input type="checkbox" /></div>
            <div className="table-cell">3-х месячный аб...</div>
            <div className="table-cell">Fitness</div>
            <div className="table-cell">Samal</div>
            <div className="table-cell">365 дней</div>
            <div className="table-cell">110.000 ₸</div>
            <div className="table-cell">Да</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
          </div>

          <div className="table-row">
            <div className="table-cell checkbox-cell"><input type="checkbox" /></div>
            <div className="table-cell">3-х месячный аб...</div>
            <div className="table-cell">Fitness</div>
            <div className="table-cell">Samal</div>
            <div className="table-cell">365 дней</div>
            <div className="table-cell">110.000 ₸</div>
            <div className="table-cell">Да</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
          </div>

          <div className="table-row">
            <div className="table-cell checkbox-cell"><input type="checkbox" /></div>
            <div className="table-cell">3-х месячный аб...</div>
            <div className="table-cell">Fitness</div>
            <div className="table-cell">Samal</div>
            <div className="table-cell">365 дней</div>
            <div className="table-cell">110.000 ₸</div>
            <div className="table-cell">Да</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
          </div>

          <div className="table-row">
            <div className="table-cell checkbox-cell"><input type="checkbox" /></div>
            <div className="table-cell">3-х месячный аб...</div>
            <div className="table-cell">Fitness</div>
            <div className="table-cell">Samal</div>
            <div className="table-cell">365 дней</div>
            <div className="table-cell">110.000 ₸</div>
            <div className="table-cell">Да</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
            <div className="table-cell">12 000 ₸</div>
          </div>
        </div>
      </section>

      <section className="pagination">
        <div>
          <ul className="pagination">
            <li><button id="prev" disabled>&lt; Prev</button></li>
            <li><button className="active">1</button></li>
            <li><button>2</button></li>
            <li><button>3</button></li>
            <li>...</li>
            <li><button>9</button></li>
            <li><button>10</button></li>
            <li><button id="next">&gt; Next</button></li>
          </ul>
        </div>
      </section>
  </main>  
</>
}


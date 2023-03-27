import React from 'react'
import PersonalSlider from './components/PersonalSlider/PersonalSlider'
import style from './PersonalSection.module.scss'

export default function PersonalSection({persons}) {
  return (
    <section className={style.section}>
        <div className={style.container}>
            <p className={style.header}>Наша команда</p>
            <p className={style.subtitle}>Нам можно доверить привлечение новых клиентов в ваш бизннес, создание удобного и красивого интерфейса,его развитие, обновление, продвижение. С нами вы в хорошей компании</p>
            <PersonalSlider
                data={persons}
            />
        </div>
    </section>
  )
}

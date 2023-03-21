import React from 'react'
import { LazyImage } from '../LazyImage/LazyImage'
import style from './ProductSection.module.scss'

export default function ProductSection({data}) {
  return (
    <section className={style.section}>
        <div className={style.container}>
            <p className={style.header}>Наши продукты</p>
            <div className={style.card_block}>
            { data?.length ? data.sort((a,b) => { return b.index - a.index}).map((item) => {
                return (
                    <div className={style.card} key={item.id}>
                        <p className={style.card_price}>от {item.price} ₽</p>
                        <LazyImage
                            src={item.image}
                            alt={item.name}
                            width={'80px'}
                            height={'80px'}
                            className={style.card_image}
                        />
                        <p className={style.card_name}>{item.name}</p>
                    </div>
                )
            }) : null}
            </div>
        </div>
    </section>
  )
}

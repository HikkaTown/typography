import React from 'react'
import KeysCard from '../KeysCard/KeysCard'
import style from './KeysLandingSection.module.scss'
import { useState } from 'react';
import Button2 from '../uikit/Button2/Button2';

export default function KeysLandingSection({ data }) {
    console.log(data);
    const [showMore, setShowMore] = useState(false);
    const visibleCards = 6;
    return (
        <section className={style.section}>
            <div className={style.container}>
                <p className={style.header}>Наши кейсы</p>
                <div className={style.cards_block}>
                    {data.slice(0, showMore ? data?.length : visibleCards).map((item) => {
                        return <KeysCard key={item.id} data={item} />
                    })}
                </div>
                {!showMore && data?.length > visibleCards && (
                    <Button2 className={style.btn}>Показать ещё</Button2>
                )}
            </div>
        </section>
    )
}

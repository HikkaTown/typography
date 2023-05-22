import React from 'react'
import s from './FormsCard.module.scss'
import cs from 'classnames';
import { LazyImage } from '@/components/LazyImage/LazyImage';
import DownloadIcon from '../DownloadIcon/DownloadIcon';
import LoopIcon from '../LoopIcon/LoopIcon';

export default function FormsCard({
    className,
    data,
    setOpenModal,
    index,
}) {
  return (
    <div className={cs(s.card, className)}>
        <button className={s.loop_btn} onClick={() => {
            setOpenModal(index)
        }}>
            <LoopIcon className={s.loop_icon}/>
        </button>
        <LazyImage
            src={data.image}
            alt={data.name}
            className={s.imageStyle}
        />
        <div className={s.card_info}>
            <p className={s.card_name}>
                {data.name}
            </p>
            <a 
                href={data.image} 
                title='Скачать'
                download
                className={s.download_btn}
            >
                <DownloadIcon/>
            </a>
        </div>
    </div>
  )
}
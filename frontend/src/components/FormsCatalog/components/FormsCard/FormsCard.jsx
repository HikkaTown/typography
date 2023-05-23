import React, { useRef } from 'react'
import s from './FormsCard.module.scss'
import cs from 'classnames';
import { LazyImageWrapper } from '@/components/LazyImage/LazyImage';
import DownloadIcon from '../DownloadIcon/DownloadIcon';
import LoopIcon from '../LoopIcon/LoopIcon';

export default function FormsCard({
    className,
    data,
    setOpenModal,
    index,
}) {

    const cardRef = useRef(null);
    const downloadRef = useRef(null);

  return (
    <div className={cs(s.card, className)} ref={cardRef} onClick={(e) => {
        if(e.target.parentNode !== downloadRef.current) setOpenModal(index)
    }}>
        <button className={s.loop_btn} onClick={() => {
            setOpenModal(index)
        }}>
            <LoopIcon className={s.loop_icon}/>
        </button>
        <LazyImageWrapper
            src={data.image}
            alt={data.name}
            className={s.imageStyle}
            wrapperClass={s.imageWrapper}
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
                ref={downloadRef}
            >
                <DownloadIcon className={s.icon}/>
            </a>
        </div>
    </div>
  )
}
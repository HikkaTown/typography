import React, { useState } from 'react'
import { LazyImage } from '../LazyImage/LazyImage'
import style from './KeysCard.module.scss'
import ModalProjectPhoto from '../ModalProjectPhoto/ModalProjectPhoto'
import { AnimatePresence } from 'framer-motion'


export default function KeysCard({ data }) {
    const [isOpened, setIsOpened] = useState(false);

    const handleClose = () => {
        setIsOpened(false)
    }

    const handleOpen = () => {
        if(data?.images?.length) {
            setIsOpened(prev => !prev)
        }
    }

    return (
        <div className={style.card} onClick={handleOpen} >
            <LazyImage
                src={data.preview}
                alt={data.name}
                height={'250px'}
                width={'auto'}
                className={style.card_image}
            />
            <div className={style.card_content}>
                <p className={style.card_name}>
                    {data.name}
                </p>

                <button className={style.btn}>
                    <LazyImage
                        src={'/eyeIcon.png'}
                        width={20}
                        height={20}
                    />
                </button>
            </div>
            <AnimatePresence>
                {isOpened && (
                    <ModalProjectPhoto
                        isOpened={data?.images?.length ? isOpened : false}
                        onClose={handleOpen}
                        photos={data?.images || []}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}

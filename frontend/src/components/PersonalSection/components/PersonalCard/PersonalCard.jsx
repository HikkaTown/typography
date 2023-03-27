import React from 'react'
import style from './PersonalCard.module.scss'
import cs from 'classnames'
import { AnimatePresence, m, motion } from 'framer-motion'

export default function PersonalCard({ personInfo, className, onClick, isVisible, index }) {

    return (
        <div
            className={cs(style.card, className)}
            onMouseEnter={() => {
                onClick(personInfo, index)
            }}
            onMouseLeave={() => {
                onClick(null)
            }}
        >
            <motion.img
                src={personInfo.src}
                alt={personInfo.name}
                className={style.card_image}
                width={156}
                height={156}
                animate={isVisible ? 'small' : 'initial'}
                variants={{
                    initial: {
                        width: '156px',
                        height: '156px',
                        transition: '0.3s'
                    },
                    small: {
                        width: '80px',
                        height: '80px',
                        transition: '0.3s'
                    }
                }}
            />
            <p className={style.card_name}>
                {personInfo.name}
            </p>
            <p
                className={style.card_prof}
                style={{
                    color: personInfo.colorProfText ? personInfo.colorProfText : '#056AC7',
                    backgroundColor: personInfo.colorProfText ? personInfo.colorProfBackground : '#AFD7FD'
                }}>
                {personInfo.profession}
            </p>
            <AnimatePresence>
                {isVisible && (
                    <motion.p
                        className={style.card_subtitle}
                        initial={{
                            height: '0',
                            overflow: 'hidden',
                            transition: {
                                ease: "linear",
                                delay: '0.3s',
                                duration: '0.3s'
                            }
                        }}
                        animate={{
                            height: 'auto',
                            overflow: 'visible',
                            transition: {
                                delay: '0.3s',
                                duration: '0.3s'
                            }
                        }}
                        exit={{
                            height: '0',
                            overflow: 'hidden',
                            transition: {
                                delay: '0.3s',
                                duration: '0.3s'
                            }
                        }}
                    >
                        {personInfo.subtitle}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    )
}

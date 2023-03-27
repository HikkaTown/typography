import React from 'react'
import YellowBtn from '../uikit/YellowBtn/YellowBtn';
import style from './LandingHeroSection.module.scss';
import ReactMarkdown from "react-markdown";
import { LazyImage } from '../LazyImage/LazyImage';
import { ScrollBtn } from '../HeroMainSection/HeroMainSection';
import { motion } from 'framer-motion';

export default function LandingHeroSection({
    title
}) {

    const star = () => {
        return (
            <svg className={style.star} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.6" d="M15.8536 7.829C11.9698 7.09033 8.9088 4.02986 8.17054 0.146104C8.13341 -0.0487012 7.8666 -0.0487012 7.82947 0.146104C7.0912 4.02986 4.03022 7.09121 0.146357 7.829C-0.0487857 7.86602 -0.0487857 8.13311 0.146357 8.17013C4.03022 8.9088 7.0912 11.9693 7.82947 15.8539C7.8666 16.0487 8.13341 16.0487 8.17054 15.8539C8.9088 11.9701 11.9698 8.9088 15.8536 8.17013C16.0488 8.13311 16.0488 7.8669 15.8536 7.829Z" fill="white" />
            </svg>
        )
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0
            }
        }
    }
    
    const handleItem = (delay) => ({
        hidden: { opacity: 0, transition: { duration: '0.3s' } },
        show: { opacity: '0.6', transition: { delay: delay, duration: '0.3s' } }
    })

    return (
        <section className={style.section}>
            <LazyImage
                src={'/bg_pc.jpg'}
                srcTablet={'/bg_tab.jpg'}
                srcMobile={'/bg_mob.jpg'}
                lazy={false}
                className={style.background}
            />
            <div className={style.container}>
                <ReactMarkdown className={style.title}>
                    {title}
                </ReactMarkdown>
                <YellowBtn>
                    Оставить заявку
                </YellowBtn>
            </div>
            <motion.ul
                className={style.list}
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.li className={style.item} variants={handleItem('0.3')}>
                    {star()} <span className={style.item_text}>Маркетинг</span>
                </motion.li>
                <motion.li className={style.item} variants={handleItem('0.6')}>
                    {star()} <span className={style.item_text}>Дизайн</span>
                </motion.li>
                <motion.li className={style.item} variants={handleItem('0.9')}>
                    {star()} <span className={style.item_text}>Разработка</span>
                </motion.li>
                <motion.li className={style.item} variants={handleItem('1.2')}>
                    {star()} <span className={style.item_text}>Тестирование</span>
                </motion.li>
                <motion.li className={style.item} variants={handleItem('1.5')}>
                    {star()} <span className={style.item_text}>Продвижение</span>
                </motion.li>
            </motion.ul>
            <ScrollBtn className={style.scroll_btn} />
        </section>
    )
}
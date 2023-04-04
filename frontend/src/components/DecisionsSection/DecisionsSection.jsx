import React, { useEffect, useRef, useState } from 'react'
import style from './DecisionsSection.module.scss'
import cs from 'classnames';
import {motion} from 'framer-motion'
import useOnScreen from '@hooks/useOnScreen';

export default function DecisionsSection() {
    const ref = useRef(null)
    const [animationDone, setAnimationDone] = useState(false)
    const isVisible = true
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
       hidden: {opacity: 0, transition: {duration: '0.3s'}},
       show: {opacity: '1', transition: {delay: delay, duration: '0.3s'}}
      })


      useEffect(() => {
        if(!animationDone) setAnimationDone(isVisible);
      }, [isVisible])

    return (
        <section className={style.section}>
            <div className={style.container}>
                <p className={style.header}>
                    Цифровые решения от начала до конца
                </p>
                <LineComponent className={style.container_line}/>
                <p className={style.sub_header} ref={ref}>Наши сайты приводят целевых клиентов</p>
                <motion.ul 
                className={style.list}
                >
                    <motion.li 
                        className={cs(style.item, style.circl)} 
                        whileInView={{
                            scale: [1, 1.7, 1.7, 1, 1],
                            rotate: [0, 0, 180, 180, 0],
                            borderRadius: ["30%", "0%", "50%", "50%", "50%"]
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                        }}
                        viewport={{ once: true }}
                    >
                        <span className={style.text}>Полный контроль процесса</span>
                    </motion.li>
                    <motion.li 
                        className={cs(style.item, style.oval)} 
                    >
                        <span className={style.text}>Оптимизация конверсии</span>
                    </motion.li>
                    <motion.li 
                        className={cs(style.item, style.circl)} 
                        whileInView={{
                            scale: [1, 1.7, 1.7, 1, 1],
                            rotate: [0, 0, 180, 180, 0],
                            borderRadius: ["30%", "0%", "20%", "90%", "50%"]
                        }}
                        transition={{
                            delay: 1.2,
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                        }}
                        viewport={{ once: true }}
                    >
                        <span className={style.text}>Соблюдение сроков</span>
                    </motion.li>
                    <motion.li className={cs(style.item, style.oval)} variants={handleItem('1.2')}>
                        <span className={style.text}>Поддержка своих продуктов</span>
                    </motion.li>
                    <motion.li 
                        className={cs(style.item, style.circl)} 
                        whileInView={{
                            scale: [1, 1.7, 1.7, 1, 1],
                            rotate: [0, 0, 180, 180, 0],
                            borderRadius: ["30%", "0%", "33%", "77%", "50%"]
                        }}
                        transition={{
                            delay: 2,
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                        }}
                        viewport={{ once: true }}
                    >
                        <span className={style.text}>Адаптация под SEO</span>
                    </motion.li>
                </motion.ul>
            </div>
        </section>
    )
}


export const LineComponent = ({ className }) => {

    const leftStar = () => {
        return (
            <svg className={style.leftStar} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2558 23.7808C13.3632 17.9552 17.9547 13.3632 23.7805 12.2552C24.0732 12.1997 24.0732 11.8004 23.7805 11.7435M12.2558 23.7808L12.0004 23.7322L12.2354 23.6875C12.1689 23.3377 12.0903 22.9922 12 22.6515M12.2558 23.7808L12 23.7322L12.2558 23.7808ZM12 22.6515C13.3756 17.4615 17.4616 13.3753 22.6517 11.9994M12 22.6515C11.9097 22.9921 11.8311 23.3375 11.7646 23.6872M12 22.6515C10.6245 17.4606 6.53869 13.3753 1.34869 11.9994M22.6517 11.9994C22.9922 12.0896 23.3375 12.1682 23.687 12.2347L23.7318 11.9993L23.7319 11.999L23.7805 11.7435M22.6517 11.9994C17.4616 10.6236 13.3756 6.53838 12 1.34842M22.6517 11.9994C22.9922 11.9091 23.3374 11.8305 23.687 11.764M23.7805 11.7435L23.7314 11.9963L23.7313 11.9967L23.6851 12.2343C23.6454 12.2266 23.5932 12.2007 23.5528 12.1496C23.5156 12.1025 23.5 12.0487 23.5 11.9998C23.5 11.951 23.5156 11.8967 23.5534 11.8491C23.5942 11.7976 23.647 11.7717 23.687 11.764M23.7805 11.7435C17.9547 10.6355 13.3632 6.04479 12.2558 0.219155C12.2001 -0.0730518 11.7999 -0.0730518 11.7442 0.219155C10.6368 6.04479 6.04533 10.6368 0.219536 11.7435C-0.0731786 11.799 -0.0731786 12.1997 0.219536 12.2552C6.04533 13.3632 10.6368 17.9539 11.7442 23.7808L23.687 11.764M23.687 11.764L23.6873 11.764C23.6872 11.764 23.6871 11.764 23.687 11.764ZM23.687 11.764L11.9997 23.7322L11.7646 23.6875C11.7646 23.6874 11.7646 23.6873 11.7646 23.6872M11.7646 23.6872L12 23.7321L12.2354 23.6872C12.2276 23.6466 12.2014 23.5937 12.1498 23.5529C12.1023 23.5154 12.0484 23.5 12 23.5C11.9516 23.5 11.8977 23.5154 11.8502 23.5529C11.7986 23.5937 11.7724 23.6466 11.7646 23.6872ZM1.34869 11.9994C6.53873 10.6245 10.6245 6.53829 12 1.34842M1.34869 11.9994C1.00802 12.0897 0.662585 12.1683 0.312849 12.2347M1.34869 11.9994C1.00805 11.9091 0.662655 11.8305 0.312956 11.764C0.353426 11.7717 0.406229 11.7979 0.446965 11.8493C0.484537 11.8968 0.5 11.9508 0.5 11.9993C0.5 12.0479 0.484537 12.1019 0.446965 12.1493C0.406192 12.2009 0.353332 12.227 0.312849 12.2347M12 1.34842C11.9097 1.00774 11.8311 0.662285 11.7646 0.312528L11.9997 0.267845L11.7442 0.219158L12 0.267781L12.2558 0.219158L12.0003 0.267845L12.2354 0.312528C12.1689 0.66228 12.0903 1.00773 12 1.34842ZM0.312849 12.2347L0.312732 12.2347L0.312849 12.2347ZM11.7646 0.312768L12 0.26791L12.2354 0.312768C12.2276 0.353427 12.2014 0.406343 12.1498 0.447088C12.1023 0.484592 12.0484 0.5 12 0.5C11.9516 0.5 11.8977 0.484592 11.8502 0.447088C11.7986 0.406343 11.7724 0.353427 11.7646 0.312768Z" fill="#FEB648" stroke="#181C27"/>
            </svg>
        )
    }

    const rightStar = () => {
        return (
            <svg className={style.rightStar} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2556 23.7808C13.363 17.9552 17.9545 13.3632 23.7803 12.2551C24.073 12.1996 24.073 11.8003 23.7803 11.7434M12.2556 23.7808L12.0002 23.7321L12.2352 23.6874C12.1687 23.3376 12.0901 22.9921 11.9998 22.6514M12.2556 23.7808L11.9998 23.7322L12.2556 23.7808ZM11.9998 22.6514C13.3754 17.4614 17.4614 13.3752 22.6515 11.9993M11.9998 22.6514C11.9095 22.9921 11.8309 23.3376 11.7644 23.6874L11.9995 23.7321L23.6868 11.764M11.9998 22.6514C10.6243 17.4605 6.5385 13.3753 1.3485 11.9994M22.6515 11.9993C22.992 12.0896 23.3373 12.1682 23.6869 12.2346L23.7316 11.9993L23.7317 11.999L23.7803 11.7434M22.6515 11.9993C17.4614 10.6235 13.3754 6.53834 11.9998 1.34838M22.6515 11.9993C22.992 11.909 23.3372 11.8304 23.6868 11.764M23.7803 11.7434L23.7312 11.9963L23.7311 11.9966L23.6849 12.2343C23.6452 12.2266 23.593 12.2007 23.5526 12.1496C23.5154 12.1025 23.4998 12.0486 23.4998 11.9998C23.4998 11.9509 23.5154 11.8967 23.5532 11.8491C23.594 11.7975 23.6468 11.7716 23.6868 11.764M23.7803 11.7434C17.9545 10.6354 13.363 6.04474 12.2556 0.219106M23.6868 11.764L11.744 23.7808C10.6366 17.9538 6.04514 13.3632 0.219344 12.2551C-0.0733703 12.1996 -0.0733703 11.799 0.219344 11.7434C6.04514 10.6368 10.6366 6.04474 11.744 0.219106M23.6868 11.764L23.6871 11.7639C23.687 11.7639 23.6869 11.7639 23.6868 11.764ZM12.2556 0.219106C12.1999 -0.0731011 11.7997 -0.0731011 11.744 0.219106M12.2556 0.219106L11.9998 0.267732L11.744 0.219106M12.2556 0.219106L12.0002 0.267796L12.2352 0.312479C12.1687 0.662231 12.0901 1.00768 11.9998 1.34838M11.744 0.219106L11.9995 0.267796L11.7644 0.312479C11.8309 0.662236 11.9095 1.00769 11.9998 1.34838M1.3485 11.9994C6.53854 10.6244 10.6243 6.53825 11.9998 1.34838M1.3485 11.9994C1.00786 11.9091 0.662463 11.8305 0.312765 11.7639C0.353235 11.7717 0.406037 11.7978 0.446774 11.8493C0.484346 11.8968 0.499808 11.9508 0.499808 11.9993C0.499808 12.0478 0.484346 12.1018 0.446774 12.1493C0.40631 12.2004 0.353942 12.2266 0.31358 12.2345M1.3485 11.9994C1.00812 12.0896 0.663001 12.1681 0.31358 12.2345M0.31358 12.2345C0.313233 12.2346 0.312886 12.2346 0.31254 12.2347L0.312657 12.2347C0.312965 12.2346 0.313273 12.2345 0.31358 12.2345ZM11.7645 0.312719L11.9998 0.267861L12.2352 0.312719C12.2274 0.353378 12.2012 0.406294 12.1496 0.447038C12.1022 0.484543 12.0482 0.499951 11.9998 0.499951C11.9514 0.499951 11.8975 0.484543 11.85 0.447038C11.7984 0.406294 11.7722 0.353378 11.7645 0.312719ZM12.2352 23.6872L11.9998 23.732L11.7645 23.6872C11.7722 23.6465 11.7984 23.5936 11.85 23.5529C11.8975 23.5154 11.9514 23.5 11.9998 23.5C12.0482 23.5 12.1022 23.5154 12.1496 23.5529C12.2012 23.5936 12.2274 23.6465 12.2352 23.6872Z" fill="#056AC7" stroke="#181C27"/>
            </svg>
        )
    }

    return (
        <div className={cs(style.blockLine, className)}>
            {leftStar()}
            <div className={style.line} />
            {rightStar()}
        </div>
    )
}
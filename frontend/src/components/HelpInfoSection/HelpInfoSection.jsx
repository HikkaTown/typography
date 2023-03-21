import React from 'react'
import style from './HelpInfoSection.module.scss'
import { LineComponent } from '../DecisionsSection/DecisionsSection'
import { LazyImage } from '../LazyImage/LazyImage'
import cs from 'classnames'

export const Message = ({ avatar, text, color, position, }) => {
    return (
        <div className={cs(style.message_item, position === 'right' && style.message_item_right)}>
            <div className={style.message_avatar_container}>
                <LazyImage
                    src={avatar}
                    className={style.message_avatar}
                />
            </div>
            <div className={style.message_buble} style={{
                backgroundColor: color
            }}>
                <p className={style.message_text}>{text}</p>
            </div>
        </div>
    )
}

export default function HelpInfoSection() {
    return (
        <section className={style.section}>
            <div className={style.container}>
                <p className={style.header}>
                    Помогаем малому бизнесу развиваться в интернете
                </p>
                <LineComponent className={style.container_line} />
                <p className={style.sub_header}>Занимаемся комплексной разработкой сайтов с нуля «под ключ»</p>
                <div className={style.messagesContainer}>
                    <p className={style.messagesHeader}>Избавляем от вопросов</p>
                    <Message
                        avatar={'/avatar1.png'}
                        text={'На какой системе он должен быть сделан?'}
                        position={'left'}
                        color={'#AFD7FD'}
                    />
                    <Message
                        avatar={'/avatar2.png'}
                        text={'Какой именно должен быть сайт?'}
                        position={'right'}
                        color={'#EAE8E8'}
                    />
                    <Message
                        avatar={'/avatar3.png'}
                        text={'Какую маркетинговую стратегию применять?'}
                        position={'left'}
                        color={'#FDDCAA'}
                    />
                    <Message
                        avatar={'/avatar4.png'}
                        text={'Как сделать, чтобы было круче, чем у конкурентов?'}
                        position={'right'}
                        color={'#AFD7FD'}
                    />
                    <Message
                        avatar={'/avatar5.png'}
                        text={'Как сделать так, чтобы он давал заявки?'}
                        position={'left'}
                        color={'#EAE8E8'}
                    />
                    <Message
                        avatar={'/avatar6.png'}
                        text={'Будет ли он в топе?'}
                        position={'right'}
                        color={'#FDDCAA'}
                    />
                </div>
                <LineComponent className={style.container_line} />
                <p className={cs(style.sub_header, style.title)}>Просто кратко скажите, для каких целей сайт и дайте примеры, что вам нравится — и мы подготовим несколько вариантов предложений со структурой будущего сайта</p>
            </div>
        </section>
    )
}

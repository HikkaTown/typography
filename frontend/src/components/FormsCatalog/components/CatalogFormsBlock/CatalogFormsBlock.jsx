import React, { useEffect, useState } from 'react'
import s from './CatalogFormsBlock.module.scss'
import FomrsTabs from '../FomrsTabs/FormsTabs'
import cs from 'classnames';
import Preloader from '@/components/Preloader/Preloader';
import FormsCard from '../FormsCard/FormsCard';
import { getCurrentFormCards } from '@/lib/apiFunctions';
import { AnimatePresence } from 'framer-motion';
import ModalFormCard from '../ModalFormCard/ModalFormCard';
import Button4 from '@/components/uikit/Button4/Button4';

export default function CatalogFormsBlock({
    tabs,
    id
}) {
    const [isActive, setIsActive] = useState(tabs[0].id);
    const [loaded, setIsLoaded] = useState(false);
    const [currentCards, setCurrentCards] = useState([]);
    const [currentOpenedCard, setCurrentOpenedCard] = useState(null);
    const [visibleSize, setVisibleSize] = useState(9);


    const handleCloseModal = () => {
        setCurrentOpenedCard(false);
    }

    const handleChangeVisibleSize = () => {
        setVisibleSize(prev => prev+3)
    }


    useEffect(() => {
        setIsLoaded(true);
        const getData = async () => {
            const res = await getCurrentFormCards(isActive);
            setCurrentCards(res);
            setIsLoaded(false)
        }
        getData();
    }, [isActive]);

    return (
        <div className={s.container}>
            <FomrsTabs data={tabs} isActive={isActive} setIsActive={setIsActive} className={s.tabs} />
            <div className={s.content_container}>
                <div className={cs(s.items, loaded && s.items_loaded, !currentCards?.length && s.items_notFound)}>
                    {!loaded && currentCards.length > 0
                        ? currentCards.sort((a, b) => a - b).slice(0, visibleSize).map((item, index) => {
                            return (
                                <FormsCard
                                    className={s.item}
                                    data={item}
                                    key={index}
                                    index={index}
                                    setOpenModal={setCurrentOpenedCard}
                                />
                            )
                        })
                        : null
                    }
                    {!loaded && !currentCards.length ? (<h1 className={s.data_notFound}>Ничего нет</h1>) : null}
                    {loaded ?
                        (
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    width: "100%",
                                }}
                            >
                                <Preloader />
                            </div>
                        )
                        : null
                    }
                </div>
                {(visibleSize < currentCards.length) ? (
                    <Button4 className={s.showMore_btn} onClick={handleChangeVisibleSize}>
                        Показать ещё
                    </Button4>
                ) : null}
            </div>
            <AnimatePresence>
                {typeof currentOpenedCard === 'number' ? (
                    <ModalFormCard
                        onClose={handleCloseModal}
                        currentItem={currentOpenedCard}
                        cards={currentCards}
                        isOpened={typeof currentOpenedCard === 'number'}
                    />
                ) : null}
            </AnimatePresence>
        </div>
    )
}

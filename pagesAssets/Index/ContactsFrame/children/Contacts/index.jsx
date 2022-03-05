import React, {useState, useMemo} from 'react';
import Card from "../../../../../components/Card";

import styles from "./style.module.css";
import useScreen from "../../../../../customHooks/useScreen";

const content = {
    desktop: [
        {
            id: 1,
            title: 'Мобильный телефон',
            content: <a href="tel:+79112871777">8 911 287 17 77</a>,
            withTopGap: true,
            titleWeight: 'bold',
            titleSize: 'large',
            titlePos: 'leftTop',
        },
        {
            id: 2,
            title: 'Почта',
            withTopGap: false,
            titleSize: 'large',
            content: <a href="mailto:barber.allin@gmail.com">barber.allin@gmail.com</a>,
        },
    ],
    mobile: [
        {
            id: 1,
            title: 'Мобильный телефон',
            content: <a href="tel:+79112871777">8 911 287 17 77</a>,
            withTopGap: true,
            titleWeight: 'bold',
            titleSize: 'large',
            titlePos: 'leftTop',
        },
        {
            id: 2,
            title: 'Почта',
            withTopGap: true,
            titleSize: 'large',
            content: <a href="mailto:barber.allin@gmail.com">barber.allin@gmail.com</a>,
        },
    ]

}


const Contacts = () => {
const [activeCard, setActiveCard] = useState(1);
const screen = useScreen();
const isMobile = screen.width <= 690;

const currentContent =useMemo(() => {
   return isMobile ? content.mobile : content.desktop;
}, [screen]);

    return (
    <>
        {currentContent.map((item) => (
            <Card
                onClick={(e) => setActiveCard(e)}
                active={item.id === activeCard}
                id={item.id}
                title={item.title}
                content={item.content}
                className={styles.card}
                titleWeight={item.titleWeight}
                titleSize={item.titleSize}
                titlePos={item.titlePos}
                withTopGap={item.withTopGap}
                isSmall
            />
        ))}
    </>
)
}

export default Contacts;

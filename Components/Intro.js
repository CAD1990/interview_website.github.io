import Button from 'react-bootstrap/Button'
import styles from '../styles/Home.module.css'
import React, { useCallback, useState } from "react";
import useFitText from "use-fit-text";


export default function IntroHeader({ title, subtitle }) {
    const onStart = useCallback(() => {
        console.log("Example 3 resizing started");
    }, []);
    const onFinish = useCallback((fontSize = number) => {
        console.log("Example 3 resizing finished", fontSize);
    }, []);
    const { fontSize, ref } = useFitText({ maxFontSize: 120, onStart, onFinish });
    return (
        <div ref={ref} className={styles.sectionContainer} style={{fontSize, height: "100%", width: "100%"}}>
            <h1 className={styles.IntroHeader}>{title}</h1>
            <h2 className={styles.IntroSubtitle}>{subtitle}</h2>
            <hr></hr>
            </div>
    )
}
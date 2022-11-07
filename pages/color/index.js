import Link from 'next/link';
import Head from 'next/head';
import { useState } from "react";
import styles from '/styles/Home.module.css'

const colorGame = () => {
    const colors = ["red", "blue", "green", "pink"];
    const [color, setColor] = useState(pickColor(colors));
    const [txtColor, setTxtColor] = useState(pickColor(colors));
    const [err, setErr] = useState(false);
    const [score, setScore] = useState(0);
    const handleClick = () => {
        setColor(pickColor(colors));
        setTxtColor(pickColor(colors));
        setErr(false);
        setScore(score + 1);
    };
    const buttons = colors.map((bgcolor) => (
        <button className={styles.button}
        style = {{backgroundColor: bgcolor}}
        value={bgcolor}
        onClick={
            bgcolor === color
            ? handleClick
            : () => {
                setErr(true);
                setScore(0);
                }
        } 
        ></button>
    ));
    return(
        <div className={styles.description}>
            <Head>
                <title>Games | Color Game</title>
                <meta name="keywords" content="colorGame"/>
            </Head>
            <div>
                <h1 className={styles.gameName}>Colorgame</h1>
                <h1 className={styles.colorGame} 
                style={{ color: txtColor }}>{color}</h1>
                <div className={styles.grid}>
                    {buttons}
                </div>
                
                <div className={styles.score}>
                    your score: {score}
                </div>
                {err ? (
                    <div style={{ color: "red", padding: 14 }}>Prøv på nytt</div>
                ) : null}
            </div>
        </div>
    );
}
function pickColor(colors) {
    const rand_num = Math.floor(Math.random() * colors.length);
    return colors[rand_num];
  }
  
export default colorGame;

//Next.js
import Head from 'next/head';

//Context
import { useVisited } from "../context/index";

//Components
import { NavBar } from './navbar';

//CSS
import styles from "../styles/layout.module.css";

//Lottie
import Lottie from 'react-lottie-player';
import openingLottie from '../animation/data.json';


export default function Layout({ children }) {
    const { visited } = useVisited();

    return (
        <body className={styles.landing}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://use.typekit.net/low6llp.css" />
                <meta
                    name="description"
                    content="Luke Yamasaki's portfolio website using Next.js"
                />
                <meta name="og:title" content="Luke Yamasaki's Portfolio Website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            {visited ? (
                <>
                    <NavBar visited={visited} />
                    <main>{children}</main>
                </>

            ) : (
                <>
                    <div className={styles.anim}>
                        <Lottie
                        animationData={openingLottie}
                        play
                        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                        />
                    </div>
                    <NavBar visited={visited}/>
                    <main className={styles.welcomeMain}>{children}</main>
                </>
            )}
        </body>
    )
}

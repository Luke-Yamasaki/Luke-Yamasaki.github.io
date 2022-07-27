<<<<<<< HEAD
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

export default function Layout({ children, home }) {
    const { visited } = useVisited();

    return (
        <div className={styles.landing}>
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
            {home ? (
                 <>
                    {!visited &&
                        <div className={styles.anim}>
                            <Lottie
                                animationData={openingLottie}
                                play
                                rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                            />
                        </div>
                    }
                    <NavBar visited={visited}/>
                    <main className={visited ? styles.homeMain : styles.welcomeMain}>{children}</main>
                </>
            ) : (
                <>
                    <NavBar visited={visited} />
                    <main className={styles.projectsContainer}>{children}</main>
                </>
            )}
        </div>
    )
=======
import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Luke Yamasaki'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
>>>>>>> main
}

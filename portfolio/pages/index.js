import Head from 'next/head'
import { NavBar } from '../components/welcomeNavbar';
import styles from '../styles/main.module.css'
import Image from "next/image";


export default function Home() {
  return (
    <div className={styles.landing}>
      <Head>
        <title>Luke Yamasaki | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/low6llp.css" />
      </Head>

      <NavBar />
      <main className={styles.welcomeMain}>
          <section className={styles.welcomeInfo}>
              <div className={styles.greetBox}>
                  <h1 className={styles.welcomeGreet}>Hello!</h1>
                  <h1 className={styles.delayedGreet}>My name is Luke Yamasaki</h1>
              </div>
              <h1 className={styles.smallGreet}>My name is Luke Yamasaki</h1>
              <div>
                  <h2 className={styles.welcomeBio}>I'm a Graphic/UI Designer and Software Engineer from Tokyo.</h2>
                  <h3 className={styles.welcomeDescription}>I can assist with design systems, prototyping and full-stack development.</h3>
              </div>
          </section>
          <section className={styles.welcomePictureSection}>
            <Image
              priority
              src="/images/profile_square.png"
              className={styles.welcomeProfilePicture}
              width={1312}
              height={1312}
              alt="Luke Yamasaki profile pic"
            />
          </section>
      </main>
    </div>
  )
}
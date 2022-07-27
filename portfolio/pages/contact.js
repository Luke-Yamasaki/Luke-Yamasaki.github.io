import { NavBar } from '../../components/welcomeNavbar';
import Head from 'next/head';
import styles from '../../styles/design.module.css';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Luke Yamasaki | Contact</title>
            </Head>
            <div classNAme={styles.design}>
                <NavBar />
                <section className={styles.contact}>
                    <div className={styles.contactBox}>
                        <h1 className={styles.contactInfo}>Email:  <a className={styles.contactLink} href="mailto:dreamandbuild@lukeyamasaki.com" target="_blank">DreamAndBuild@lukeyamasaki.com</a></h1>
                        <h1 className={styles.contactInfo}>Phone:  <a className={styles.contactLink} href="tel:7209498111" target="_blank">(720) 949-8111</a></h1>
                    </div>
                </section>
            </div>
        </>
    )
}

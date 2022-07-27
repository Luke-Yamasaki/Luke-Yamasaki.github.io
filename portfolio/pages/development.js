import { NavBar } from "../../components/welcomeNavbar";
import styles from "../../styles/design.module.css";
import Head from 'next/head';
import Image from 'next/image';

export default function Development() {
    return (
        <>
            <Head>
                <title>Luke Yamasaki | Development</title>
            </Head>
            <div className={styles.design}>
                <NavBar />
                <section className={styles.projects}>
                    <h1 className={styles.projectTitle}>
                        Full-stack web applications
                    </h1>
                    <div className={styles.projectBox}>
                        <a className={`${styles.designProject} ${styles.devOne}`} href="https://mealize.herokuapp.com/" target="_blank">
                            <Image className={styles.projectImages} src="/images/Mealize.png" width={425} height={425} alt="Mealize"/>
                        </a>
                        <a className={`${styles.designProject} ${styles.devTwo}`} href="https://find-table.herokuapp.com/" target="_blank">
                            <Image className={styles.projectImages} src="/images/FindTable.png" width={425} height={425} alt="FindTable"/>
                        </a>
                        <a className={`${styles.designProject} ${styles.devThree}`} href="https://aa-cooknook.herokuapp.com/" target="_blank">
                            <Image className={styles.projectImages} src="/images/CookNook.png" width={425} height={425} alt="CookNook"/>
                        </a>
                        <a className={`${styles.designProject} ${styles.devFour}`} href="https://shuttr-aa.herokuapp.com/" target="_blank">
                            <Image className={styles.projectImages} src="/images/Shuttr.png" width={425} height={425} alt="Shuttr"/>
                        </a>
                    </div>
                </section>
            </div>

        </>
    )
}

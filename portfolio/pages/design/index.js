//Next.js
import Head from 'next/head';

//Components
import Layout from '../../components/layout';

//CSS
import styles from "../../styles/design.module.css";


export default function Design() {
    return (
        <Layout>
            <Head>
                <title>Luke Yamasaki | Design</title>
            </Head>
            <section className={styles.projects}>
                <h1 className={styles.projectTitle}>
                    Design systems
                </h1>
                <div className={styles.projectBox}>
                    <a className={styles.designProject} href="https://www.behance.net/gallery/146034665/Ark-Brand-Guidelines" target="_blank">
                        <div className={styles.designOne}></div>
                    </a>
                    <a className={styles.designProject} href="https://www.behance.net/gallery/146037025/Peer-Review-Brand-Identity" target="_blank">
                        <div className={styles.designTwo}></div>
                    </a>
                    <a className={styles.designProject} href="https://www.behance.net/luke_yamasaki" target="_blank">
                        <div className={styles.designThree}></div>
                    </a>
                    <a className={styles.designProject} href="https://www.behance.net/gallery/146037531/SLC-Winter-Olympic-Design-System-Student-Project?tracking_source=project_owner_other_projects" target="_blank">
                        <div className={styles.designFour}></div>
                    </a>
                </div>
            </section>
        </Layout>
    )
}

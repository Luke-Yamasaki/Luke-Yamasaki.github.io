//Next.js
import Head from 'next/head';

//Components
import Layout from "../components/layout";

//CSS
import styles from '../styles/about.module.css';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>Luke Yamasaki | About</title>
            </Head>
            <section className={styles.aboutSection}>
                <div className={styles.aboutBox}>
                    <h1 className={styles.aboutTitle}>A creative developer who leverages print and digital techniques to solve client dilemmas.</h1>
                    <p className={styles.aboutContent}>
                        As a designer, storytelling is at the core of my work.
                        I favor risk taking and aim to tell dynamic stories by pushing boundaries with typography, illustrations and motion design.
                        Whether the project is print or digital, my creative decisions are driven by design thinking, formative research and summative research to ensure clarity and effectiveness.
                        <br />
                        <br />
                        As a full-stack developer, I love challenges and I am flexible enough to join projects at different stages and work in a team environment.
                        I understand DS&A, how to closely follow data as it flows through two different languages, how to migrate html templates to React.js and how to convert vanilla CSS to modules or styled-components.
                        <br />
                        <br />
                        My strength as a creative developer is to combine various disciplines to bridge communication gaps and bring greater business value to projects.
                        Having worked at an ad agency in Tokyo, I understand the big picture and the ecosystem of brands and products.
                        I can empathize with users, clients, designers, developers, marketers and business administrators, which makes me a sound candidate for team oriented projects.
                    </p>
                </div>
            </section>
        </Layout>
    )
}

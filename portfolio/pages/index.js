<<<<<<< HEAD
//Next.js
import Head from 'next/head'
import Image from "next/image";

//Components
import Layout from '../components/layout';

//CSS
import styles from '../styles/home.module.css'


export default function Home() {

  return (
    <Layout home>
      <Head>
        <title>Luke Yamasaki | Portfolio</title>
      </Head>
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
=======
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
>>>>>>> main
      </section>
    </Layout>
  )
}
<<<<<<< HEAD
=======

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
>>>>>>> main

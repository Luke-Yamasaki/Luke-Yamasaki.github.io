//Next.js
import Link from "next/link";
import Image from "next/image";

//Components
import { NavLinks } from './navLinks';
import { HamburgerMenu } from './hamburgerMenu';

//CSS
import styles from '../styles/navigation.module.css';

//Images
import logo from '../public/images/LKY_Logo.png';

export const NavBar = ({ visited }) => {

    return (
        <nav className={visited ? styles.regNav : styles.welcomeNav}>
            <ul className={styles.navList}>
                <li className={`${styles.navItem} ${styles.navLogo}`}>
                    <Link href='/'>
                        <a className={styles.homeLink}>
                            <div className={styles.logoBox}>
                                <Image
                                    priority
                                    className={styles.logo}
                                    src={logo}
                                    height={30}
                                    width={30}
                                    alt="Luke Yamasaki's logo"
                                />
                                <div className={styles.logoType}>
                                    LUKE YAMASAKI
                                </div>
                            </div>
                        </a>
                    </Link>
                </li>
                <li className={`${styles.navItem} ${styles.navMenu}`}>
                    <HamburgerMenu />
                </li>
                <li className={`${styles.navItem} ${styles.navLinks}`}>
                    <NavLinks />
                </li>
            </ul>
        </nav>
    )
}

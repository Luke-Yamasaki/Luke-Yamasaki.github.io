import styles from '../styles/navigation.module.css';
import Link from "next/link";
import Image from "next/image";
import logo from '../public/images/LKY_Logo.png';
import { NavLinks } from './navLinks';
import { HamburgerMenu } from './hamburgerMenu';

const altName = "Luke Yamasaki's logo";

export const NavBar = () => {

    return (
        <nav className={styles.welcomeNav}>
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
                                    alt={altName}
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

import styles from '../styles/welcomeNavigation.module.css';
import mainStyles from '../styles/mainNavigation.module.css';
import Link from "next/link";
import Image from "next/image";
import logo from '../public/images/LKY_Logo.png';
import { NavLinks } from './navLinks.js';

const altName = "Luke Yamasaki's logo";

export const NavBar = () => {

    return (
        <nav className={styles.welcomeNav}>
            <ul className={styles.welcomeList}>
                <li className={`${styles.welcomeItem} ${mainStyles.navLogo}`}>
                    <Link href='/'>
                        <a className={mainStyles.homeLink}>
                            <div className={mainStyles.logoBox}>
                                <Image
                                    priority
                                    className={mainStyles.logo}
                                    src={logo}
                                    height={30}
                                    width={30}
                                    alt={altName}
                                />
                                <div className={mainStyles.logoType}>
                                    LUKE YAMASAKI
                                </div>
                            </div>
                        </a>
                    </Link>
                </li>
                <li className={`${styles.welcomeItem} ${mainStyles.navLinks}`}>
                    <NavLinks />
                </li>
            </ul>
        </nav>
    )
}

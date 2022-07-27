//Next.js
import Link from "next/link";

//Context
import { useVisited } from "../context/index";

//CSS
import styles from '../styles/navigation.module.css';


export const NavLinks = () => {
    const { setVisited } = useVisited();

    const handleNavigation = () => {
        sessionStorage.setItem('visited', 'true');
        return setVisited(true);
    }

    return (
        <div className={styles.navLinksBox}>
            <Link href='/design'>
                <a onClick={handleNavigation} className={styles.navLink}>
                    Design
                </a>
            </Link>
            <Link href='/development'>
                <a onClick={handleNavigation} className={styles.navLink}>
                    Development
                </a>
            </Link>
            <Link href='/about'>
                <a onClick={handleNavigation} className={styles.navLink}>
                    About
                </a>
            </Link>
            <Link href='contact'>
                <a onClick={handleNavigation} className={styles.navLink}>
                    Contact
                </a>
            </Link>
        </div>
    )
}

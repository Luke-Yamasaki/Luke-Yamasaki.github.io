//Next.js
import Link from 'next/link';

//React
import { useState } from 'react';

//Context
import { useVisited } from "../context/index";

//CSS
import styles from '../styles/navigation.module.css';

export const HamburgerMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { visited, setVisited } = useVisited();

    const handleMenu = (e) => {
        e.preventDefault();
        return setShowMenu(!showMenu);
    }

    const handleNavigation = () => {
        if(!visited) {
            sessionStorage.setItem('visited', 'true');
            return setVisited(true);
        }
    }

    return (
        <aside className={showMenu ? `${styles.hamburgerContainer} ${styles.shownContainer}` : styles.hamburgerContainer}>
            <div className={showMenu ? `${styles.hamburgerBox} ${styles.shownBox}` : styles.hamburgerBox} onClick={handleMenu}>
                <div className={showMenu ? `${styles.hamburgerLine} ${styles.shownOne}` : styles.hamburgerLine}></div>
                <div className={showMenu ? `${styles.hamburgerLine} ${styles.shownTwo}` : styles.hamburgerLine}></div>
                <div className={showMenu ? `${styles.hamburgerLine} ${styles.shownThree}` : styles.hamburgerLine}></div>
            </div>
            <menu className={showMenu ? `${styles.dropDownMenu} ${styles.menuShown}` : styles.dropDownMenu}>
                <Link href='/design'>
                    <a onClick={handleNavigation} className={showMenu ? `${styles.dropDownLink} ${styles.linkShown}` : styles.dropDownLink}>
                        Design
                    </a>
                </Link>
                <Link href='/development'>
                    <a onClick={handleNavigation} className={showMenu ? `${styles.dropDownLink} ${styles.linkShown}` : styles.dropDownLink}>
                        Development
                    </a>
                </Link>
                <Link href='/about'>
                    <a onClick={handleNavigation} className={showMenu ? `${styles.dropDownLink} ${styles.linkShown}` : styles.dropDownLink}>
                        About
                    </a>
                </Link>
                <Link href='/contact'>
                    <a onClick={handleNavigation} className={showMenu ? `${styles.dropDownLink} ${styles.linkShown}` : styles.dropDownLink}>
                        Contact
                    </a>
                </Link>
            </menu>
        </aside>
    )
}

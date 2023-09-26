import styles from './Logo.module.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';
//export function to have Project title
export default function Logo() {
    const [animation, setAnimation] = useState('')
    return (
        <div>
            <header className={styles.header}>
            <a class="logo" href="#"><img src="img/OUDUS BLACK.png" alt="logo" width="80" /></a>
            </header>
        </div>

    );
}
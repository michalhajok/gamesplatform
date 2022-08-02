import Link from 'next/link'

import styles from '@/styles/nav.module.scss'

const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <Link href='/'>
                <a>Back</a>
            </Link>
        </nav>
    )
}

export default Nav

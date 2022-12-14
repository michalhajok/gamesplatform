import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import styles from '@/styles/home.module.scss'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
        <Head>
            <title>Game platform</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
            
            <h1>Choose a game</h1>
            
            <div className={styles.gameList}>
                <Link href='/rockpaperscissors'>
                    <a  className={styles.game}>Rock paper scissors</a>
                </Link>
                <Link href='/quiz'>
                    <a  className={styles.game}>Quiz</a>
                </Link>
                <Link href='/memory'>
                    <a  className={styles.game}>Memory</a>
                </Link>
            </div>
        </div>
    )
}

export default Home

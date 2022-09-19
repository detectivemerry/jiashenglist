import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  return (
    <div>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>Hello this is jiasheng</p>
      <p className={styles.text}>Hello this is jiasheng</p>
      <Link href="/jiashengs">
        <a className={styles.btn}>See Jiasheng Listing</a>
      </Link>

    </div>
  )
}

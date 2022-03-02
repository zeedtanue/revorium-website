import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Product() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Revorium</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Our Product
        </h1>

        
      </main>

      
    </div>
  )
}

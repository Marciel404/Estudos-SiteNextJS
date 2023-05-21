import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home(){
  return (
    <div className={styles.container}>

      <Head>
        <title>Home</title>
      </Head>

      <main>
        <h1>Estudos NextJs</h1>
      </main>
      
    </div>
  )
}

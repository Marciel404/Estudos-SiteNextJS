import Head from 'next/head';
import HEADER from '../components/header';
import FOOTER from '../components/footer';
import styles from '../styles/Home.module.css';

export default function Home(){
  return (
    <div>

      <Head>
        <title>Home</title>
      </Head>

      <main>
        <HEADER></HEADER>
        <h1>Estudos NextJs</h1>
        <FOOTER></FOOTER>
      </main>
      
    </div>
  )
}

import Head from 'next/head';
import FOOTER from '../components/footer';
import Header from '../components/header'

export default function Home(){
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta charset="UTF-8"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <main>
        <Header></Header>
        <h1>Estudos NextJs</h1>
        <FOOTER></FOOTER>
      </main>
      
    </div>
  )
}

import Head from 'next/head';
import FOOTER from '../components/footer';
import HEADER from '../components/header'

export default function Home(){
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <main>
        <HEADER></HEADER>
        <h1>Transformando sonhos em realidade</h1>
        <br></br>
        <p>A</p>
        <FOOTER></FOOTER>
      </main>
    </div>
  )
}

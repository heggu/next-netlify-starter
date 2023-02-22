import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>JIHOON</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my site - Jihoon!" />
        <p className="description">
          Attack on Titan Last Season Release Date <code>3/3</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

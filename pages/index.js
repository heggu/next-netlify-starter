import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my site - Jihoon" />
        <p className="description">
         그냥 진격의거인에 나오는  <code>MIKASA 보자</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

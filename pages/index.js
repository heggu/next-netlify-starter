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
        <Header title="Welcome to my app!" />
        <p className="description">
         <img src="https://cdn.discordapp.com/attachments/1030350459950600222/1077913389122203689/download.png" width="351",height="351">
        </p>
      </main>

      <Footer />
    </div>
  )
}

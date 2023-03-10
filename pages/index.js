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
         <code> I am learning computer science. Java, Python, etc. </code>
         <button onclick="location.href='https://shingeki.tv/final/'">Button</button >
        </p>
      </main>

      <Footer />
    </div>
  )
}

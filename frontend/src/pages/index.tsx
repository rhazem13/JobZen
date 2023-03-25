import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>JobZen</title>
        <meta name="description" content="A job finding platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-sky-500'>Hello, i am NEXT.JS</div>
    </>
  )
}

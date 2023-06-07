import Content from '@components/components/content'
import Nav from '@components/components/nav'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bridget Mahy portfolio site</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div
        className={`flex min-h-screen flex-col items-center justify-between`}
      >
        <Image
          src="/images/bg.png"
          alt="background image - AI generated wedding"
          width={1000}
          height={1000}
          className="z-0 fixed h-screen w-screen max-w-full overflow-hidden bg-cover bg-scroll sm:bg-cover"
        />
        <Nav />
        <Content />
      </div>
    </>
  )
}

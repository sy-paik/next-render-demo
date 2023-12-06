import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/photos">
            Photos
          </Link>
        </li>
      </ul>
      <Head>
        <title>My Blog</title>
        <meta name="keywords" content="My Blog powered by Next.js" />
        <meta name="description" content="My Blog powered by Next.js" />
      </Head>
      <h1>Welcome to My Blog</h1>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Connect Pe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/">ConnectPe!</Link>
        </h1>
        <a href="https://localhost:5000/facebook">
          Login
        </a>

        <p className={styles.description}>
          Connect with {' '}
          <code className={styles.code}>People Around You!</code>
        </p>

        <div className={styles.grid}>
          <Link href="/new-people">
            <a className={styles.card}>
              <h2>Find New People &rarr;</h2>
              <p>Find New People nearby and connect with them</p>
            </a>
          </Link>

          <Link href="/your-events">
            <a className={styles.card}>
              <h2>Your Events &rarr;</h2>
              <p>Check out events that you registered for</p>
            </a>
          </Link>

          <Link
              href="/new-events"
          >
            <a className={styles.card}>
              <h2>New Events &rarr;</h2>
              <p>Check New events and check-in</p>
            </a>
          </Link>

          <Link
            href="/nearby-events"
          >
            <a className={styles.card}>
              <h2>Nearby Events &rarr;</h2>
              <p>
                Check Nearby Events, No Long Distances
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

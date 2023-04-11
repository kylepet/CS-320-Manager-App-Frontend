import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Title_box from '@/components/titlebox'
import Fname from '@/components/fname'
import Lname from '@/components/lname'
import YOG from '@/components/yog'
import Previous from '@/components/previous'
import Email from '@/components/email'
import Previousgrade from '@/components/previousgrade'
import Submit from '@/components/submit'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>CS320 Form Submission Screen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Title_box />
        <Fname />
        <Lname />
        <Email />
        <YOG />
        <Previous />
        <Previousgrade />
        <Submit />
      </main>
    </>
  )
}

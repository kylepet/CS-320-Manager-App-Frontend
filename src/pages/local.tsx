import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Local.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Local() {
  return (
    <>
      <Head>
        <title>CS320 Geocities Login GUI something</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
      <div className= "col -md-6 no no-gutters">
            <div className={styles.leftside}>
                {/* <div class = squareTopLeft></div>
                <div class = squareBottomRight></div>
                <div class = squareTopLeftGreen></div>
                <div class = squareBottomRightGreen></div> */}
                    <div className = {styles.wrapper}>
                        <h2>Sign In</h2>
                        <br />
                        <div className ={styles.username}>
                            <h3>Username:</h3>
                            <textarea id = "myUsername" className = "non-preview" required></textarea>
                            <br />
                        </div>
                        <div  className = "password">
                            <h3>Password:</h3>
                            <textarea id = "myPassword" className = "non-preview" required></textarea>
                        </div>
                            <button id = "myBtn" className = {[styles.button, styles.button1].join('')}
                            //  onClick={fun1}
                             > Click Here!</button>
                    </div>
                </div>
            </div>
      </main>
    </>
  )
}

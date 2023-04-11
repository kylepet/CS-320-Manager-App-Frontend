import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>CS320 Form Submission Screen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
      <div className="title_box box" id="title-box">
            <div className="title_box_text">Project Manager Applicant Information</div>
        </div>
        <div>
            <div id="fname_box" className="field_box">
                <div id="fname-text" className="field_box_text">First Name: </div>
            </div>
            <input type="text" name="fname" id="fname" className="text_input"/>
            <div id="lname_box" className="field_box">
                <div id="lname-text" className="field_box_text">Last Name: </div>
            </div>
            <input type="text" name="lname" id="lname" className="text_input"/>
            <div id="YoG_box" className="field_box">
                <div id="YoG-text" className="field_box_text">Year of Graduation: </div>
            </div>
            <input type="number" id="YoG" className="text_input"/>
            <div id="email_box" className="field_box">
                <div id="email-text" className="field_box_text">Email: </div>
            </div>
            <input type="text" id="email" className="text_input"/>
            <div id="submit_button_container">
                <button id="submit" className="field_box_text">Submit!</button>
            </div>
        </div>
      </main>
    </>
  )
}

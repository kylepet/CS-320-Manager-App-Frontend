import Head from 'next/head'
import React from 'react';
import { Inter } from 'next/font/google'
import styles from '@/styles/login.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
  <>
  <main className={styles.body}>
  <p>
    <title>CS320 Geocities Login GUI</title>
  </p>
  <div className="col -md-6 no no-gutters">
    <div className={styles.leftside}>
      <div className={styles.wrapper}>
        <h2>Sign In</h2>
        <br />
        <div className={styles.username}>
          <h3>Username:</h3>
          <textarea
            id = "myUsername"
            className = "non-preview"
            defaultValue={""}
          />
          {/* <input type="text" name="fname" id="fname" className="text_input"/> */}
          <br />
        </div>
        <div className={styles.password}>
          <h3>Password:</h3>
          <textarea
            id= "myPassword"
            className="non-preview"
            defaultValue={""}
            />
        </div>
        <button id="myBtn" className= "button_class">
          {" "}
          Click Here!
        </button>
      </div>
    </div>
  </div>
  <p />
  </main>
</>
  )
}

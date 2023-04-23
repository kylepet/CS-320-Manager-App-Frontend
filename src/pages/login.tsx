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
          {/* <label htmlFor = "myUsername"> Username</label> */}
          <textarea
            id={styles.myUsername}
            className = "non-preview"
            defaultValue={""}
          />
          <br />
        </div>
        <div className={styles.password}>
          <h3>Password:</h3>
          {/* <label htmlFor = "myPassword"> Password</label> */}
          <textarea
            id= {styles.myPassword}
            className="non-preview"
            defaultValue={""}
            />
        </div>
        <button id="myBtn" className={styles.button}>
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
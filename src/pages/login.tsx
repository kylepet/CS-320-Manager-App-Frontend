import Head from 'next/head'
import React from 'react';
import { Inter } from 'next/font/google'
import styles from '@/login.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  <main className={styles.body}>
  <p>
    <title>CS320 Geocities Login GUI</title>
  </p>
  <div className="col -md-6 no no-gutters">
    <div className="leftside">
      <div className="wrapper">
        <h2>Sign In</h2>
        <br />
        <div className="username">
          <h3>Username:</h3>
          <label htmlFor = "myUsername"> Username</label>
          <textarea
            id="myUsername"
            className="non-preview"
            defaultValue={""}
          />
          <br />
        </div>
        <div className="password">
          <h3>Password:</h3>
          <label htmlFor = "myPassword"> Password</label>
          <textarea
            id="myPassword"
            className="non-preview"
            defaultValue={""}
            />
        </div>
        <button id="myBtn" className="button button1">
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

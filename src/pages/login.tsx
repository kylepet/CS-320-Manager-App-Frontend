import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  {/* Hello world */}
  <div className="awesome" style={{ border: "1px solid red" }}>
    <label htmlFor="name">Enter your name: </label>
    <input type="text" id="name" />
  </div>
  <p>
    <title>CS320 Geocities Login GUI something</title>
    <link rel="stylesheet" href="./main.css" />
    <link rel="stylesheet" href="./local.css" />
  </p>
  <div className="col -md-6 no no-gutters">
    <div className="leftside">
      {/* <div class = squareTopLeft></div>
          <div class = squareBottomRight></div>
          <div class = squareTopLeftGreen></div>
          <div class = squareBottomRightGreen></div> */}
      <div className="wrapper">
        <h2>Sign In</h2>
        <br />
        <div className="username">
          <h3>Username:</h3>
          <label for = "myUsername"> Username</label>
          <textarea
            id="myUsername"
            className="non-preview"
            defaultValue={""}
          />
          <br />
        </div>
        <div className="password">
          <h3>Password:</h3>
          <label for = "myPassword"> Password</label>
          <textarea
            type = "text"
            id="myPassword"
            className="non-preview"
            defaultValue={""}
            />
        </div>
        <button id="myBtn" className="button button1" onClick="fun1()">
          {" "}
          Click Here!
        </button>
      </div>
    </div>
  </div>
  <p />
</>
  )
}

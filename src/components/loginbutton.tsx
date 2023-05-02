import axios from "axios";
import { env } from "process";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import styles from "@/styles/login.module.css";

export default function ThisButton() {
  // const router = useRouter();
  // const callAPI = () => {
  //     axios.post("http://localhost:3000/signin", {
  //         email: document.getElementById('myUsername').value,
  //         password: document.getElementById('myPassword').value
  //     })
  //     .then((response) => {
  //         console.log(response);
  //         let data = response.data;
  //         if (data.hasOwnProperty('success') && !data.success){
  //             console.log('L bozo wrong password');
  //         }
  //         else {
  //             Cookies.set('loggedin', data.access_token);
  //             router.push('/dashboard');
  //         }
  //       }, (error) => {
  //         console.log(error);
  //     });
  // }

  return (
    <div>
      {/* <div id="submit_button_container"> */}
      <button type="button" id="myBtn" className={styles.button}>
        Click Here!
      </button>
      {/* </div> */}
      {/* onClick={callAPI} */}
    </div>
  );
}

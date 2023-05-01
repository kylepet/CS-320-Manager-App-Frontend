import axios from 'axios'
import styles from '@/styles/login.module.css'
import { env } from 'process';

const usernameField = document.getElementById('myUsername')
const passwordField = document.getElementById('myUsername')

export default function LoginConnection() {
    const callAPI = () => {
        axios.post("http://localhost:3000/log-in", {
            Username: usernameField,
            Password: passwordField
        })
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
        });
    }

    return (
        <>
            <div id="submit_button_container">
                <button type = "button" id="myBtn" className = {styles.button} onClick={callAPI}> Click Here!</button>
            </div>
        </>
    );
}
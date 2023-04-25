import axios from 'axios'
import { env } from 'process';

export default function LoginConnection() {
    const callAPI = () => {
        axios.post("http://localhost:3000/log-in", {
            Username: document.getElementById('myUsername').value,
            Password: document.getElementById('myPassowrd').value
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
                <button id="myBtn" className="button_class" onClick={callAPI}>Click Here!</button>
            </div>
        </>
    );
}
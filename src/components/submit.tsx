import axios from 'axios'
import { env } from 'process';

export default function Submit() {
    const callAPI = () => {
        axios.post("http://localhost:3000/submit", {
            Name: document.getElementById('fname').value + ", " + document.getElementById('lname').value,
            Email: document.getElementById('email').value,
            Grad_Year: document.getElementById('checkbox').value,
            Grade_In_320: document.getElementById('grade').value
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
                <button id="submit" className="field_box_text" onClick={callAPI}>Submit!</button>
            </div>
        </>
    );
}
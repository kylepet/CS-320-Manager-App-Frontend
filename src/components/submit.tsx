import axios from 'axios'
import { env } from 'process';

const NameField = document.getElementById('fname') + "," + document.getElementById('lname')
const EmailField = document.getElementById('email')
const Grad_YearField = document.getElementById('checkbox')
const Grade_In_320Field = document.getElementById('grade')

export default function Submit() {
    const callAPI = () => {
        axios.post("http://localhost:3000/submit", {
            Name: NameField,
            Email: EmailField,
            Grad_Year: Grad_YearField,
            Grade_In_320: Grade_In_320Field
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
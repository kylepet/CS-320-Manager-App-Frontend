import axios from 'axios'
import { env } from 'process';

export default function Submit() {
    const callAPI = () => {
        // axios.post("http://localhost:3000/submit", {
        // })
        // .then((response) => {
        //     console.log(response);
        //   }, (error) => {
        //     console.log(error);
        // });
        return 2;
    }

    return (
        <>
            <div id="submit_button_container">
                <button id="submit" className="field_box_text" onClick={callAPI}>Submit!</button>
            </div>
        </>
    );
}
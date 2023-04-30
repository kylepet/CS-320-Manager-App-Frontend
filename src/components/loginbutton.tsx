import axios from 'axios'
import { env } from 'process';
import React from 'react';
import Cookies from 'js-cookie'
import { cookies } from 'next/dist/client/components/headers';
import { useRouter } from 'next/router';


export default function ThisButton() {
    const router = useRouter();
    const callAPI = () => {
        axios.post("http://localhost:3000/signin", {
            email: 'liam.singh@umass.edu',
            password: 'F1fH9HxRj4sX'
        })
        .then((response) => {
            console.log(response);
            let data = response.data;
            if (data.hasOwnProperty('success') && !data.success){

            }
            else {
                Cookies.set('loggedin', data.access_token);
                router.push('/dashboard');
            }
          }, (error) => {
            console.log(error);
        });
    }

    return (
        <>
            <div id="submit_button_container">
                <button id="myBtn" className="" onClick={callAPI}>Click Here!</button>
            </div>
        </>
    );
}
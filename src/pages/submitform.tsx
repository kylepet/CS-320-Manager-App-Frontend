import Head from 'next/head'
import { Inter } from 'next/font/google'
import Title_box from '@/components/titlebox'
import Fname from '@/components/fname'
import Lname from '@/components/lname'
import YOG from '@/components/yog'
import Previous from '@/components/previous'
import Email from '@/components/email'
import Previousgrade from '@/components/previousgrade'
import Submit from '@/components/submit'
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRouter } from 'next/router'
import { useState } from 'react'
import { submit } from '../../services/apiSubmit'
import styles from "@/styles/login.module.css";

export default function SubmitForm() { //form to submit function
    const router = useRouter();
    const queryClient = useQueryClient();
    const [errorMessage, setErrorMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const submission = useQuery({ queryKey: ["do-submit"], queryFn: submit });

    const mutation = useMutation({
        mutationFn: submit,
        onSuccess: async (data: any) => {
            console.log("Completed Submission"); //response on completed app
            console.log(data);
            queryClient.invalidateQueries({ queryKey: ["submit"] });
        },
        onError: (error: any) => {
            console.log(error.response.data.message);
            setErrorMessage(error.response.data.message);
            queryClient.invalidateQueries({ queryKey: ["submit"] });
          },
    });

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        //need to change this data to follow user input!!
        //where you input the data from the user
        return mutation.mutate({ 
            email: 'isabella.brown@umass.edu',
            CS320taken: true,
            references: ['prof sjkdf'],
            cs320grade: 'A',
            preference: ['02B'],
        });
    };

    return (
    <>
        <Head>
            <title>CS320 Form Submission Screen</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
            <Title_box />
            <Fname />
            <Lname />
            <Email />
            <YOG />
            <Previous />
            <Previousgrade />
            <button
                onClick={handleSubmit}
                type="button"
                id="myBtn"
                className={styles.button}
              >
                Submit!
              </button>
        </main>
    </>
    )
}
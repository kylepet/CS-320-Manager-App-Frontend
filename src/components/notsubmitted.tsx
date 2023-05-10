import { Button } from "./ui/button";
import styles from "@/styles/login.module.css";
import router from "next/router";
import SubmitForm from "@/pages/submitform";

const submitform = "/submitform"

const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    router
    .push({
      pathname: submitform,
    })
    .then(() => {
      router.reload();
    });
  };


export default function NotSubmitted() {
    return (
        <li className="bg-purple-100 px-3 py-2 rounded flex justify-between items-center">
            <span className="flex justify-between items-center">
                You haven't submitted an application, submit here: 
            </span>
            <span className="space-x-2">
            <button
                onClick={onSubmit}
                type="button"
                id="myBtn"
                className={styles.button}
              >
                Click Here!
              </button>
            </span>
        </li>
);}
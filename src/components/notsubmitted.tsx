import { Button } from "./ui/button";
import styles from "@/styles/login.module.css";
import router from "next/router";
import { Divide } from "lucide-react";
import SubmissionForm from "./submissionform";

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


export default function NotSubmitted(props: any) {
    return (
      <div>
            {props.section ? <>
            <li className="bg-purple-100 px-3 py-2 rounded flex justify-between items-center">
              <span className="flex justify-between items-center">
                You have not submitted an application for this section.
              </span>
            </li>
            </> : 
            <>
            <li className="bg-purple-100 px-3 py-2 rounded flex justify-between items-center">
              <div>
                You have not submitted an application, submit here!
              </div>
              <div>
              <SubmissionForm sectionList={props.sectionList}/>
              </div>
              </li>
            </>}
      </div>
);}
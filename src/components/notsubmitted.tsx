import { Button } from "./ui/button";
import styles from "@/styles/login.module.css";
import router from "next/router";


export default function NotSubmitted() {
    return (
        <li className="bg-purple-100 px-3 py-2 rounded flex justify-between items-center">
            <span className="flex justify-between items-center">
                You haven't submitted an application to this section.
            </span>
        </li>
);}
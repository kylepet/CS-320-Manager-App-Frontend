import axios from "axios";
import { Head } from "next/document";
import { useState, useEffect } from "react";
import StudentSection from "./sectionStudent";

export default function Sections(this: any) {

    const [classes, setClasses] = useState({});
    const [isLoading, setLoading] = useState(true)


    useEffect(() => {
        axios.get("http://localhost:3000/allSections")
        .then((response) => {
            let data = response.data;
            setClasses(data);
            setLoading(false)
        }, (error) => {
            console.log(error);
        });
    }, []);
    if (isLoading) {
        return <div /> 
    }
    return (
        <>
            <div className="max-w-lg mx-auto space-y-2">
                {classes.map(() => <StudentSection />)}
            </div>
        </>
    )
}
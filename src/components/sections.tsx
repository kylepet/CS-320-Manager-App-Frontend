import axios from "axios";
import { useState, useEffect } from "react";
import StudentSection from "./sectionStudent";
import Cookies from "js-cookie";
import Accepted from "./accepted";
import Rejected from "./rejected";
import Pending from "./pending";
import NotSubmitted from "./notsubmitted";

export default function Sections(this: any) {

    const [classes, setClasses] = useState([]);
    const [isClassesLoading, setClassesLoading] = useState(true);
    const [profile, setProfile] = useState({id: ''});
    const [isProfileLoading, setProfileLoading] = useState(true); 


    useEffect(() => {
        getSections();
        getProfile();        
    }, []);

    function getSections(){
        axios.get("http://localhost:3000/manager-pool", {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get('access_token')
            }
        })
        .then((response) => {
            let data = response.data;
            console.log(data);
            setClasses(data);
            setClassesLoading(false);
            //console.log(Cookies.get('access_token'));
        }, (error) => {
            console.log(error);
        });
    }

    function getProfile() {
        axios.get("http://localhost:3000/profile", {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get('access_token')
            }
        })
        .then((response) => {
            setProfile({id: response.data.id});
            setProfileLoading(false);
            console.log(profile);
        }, (error) => {
            console.log(error);
        });
    }


    if (isClassesLoading || isProfileLoading) {
        return <div /> 
    }

    
    if (classes.length === 0){
        return (
            <div />
        )
    }

    return (
        <>
            <div className="max-w-lg mx-auto space-y-2">
                {classes.map((data: any) => <StudentSection key = {data._id} section = {data.sectionNumber}
                                             professor = {data.professor} status = 
                                             {  data.enrolled.findIndex((e: any) => e._id === profile.id) !== -1 ? <Accepted/> :
                                                data.enrolled.length >= data.cap ? <Rejected /> : 
                                                data.applications.findIndex((e: any) => e.student._id === profile.id) === -1  ? 
                                                <NotSubmitted/> : <Pending />
                                             }/>)}
            </div>
        </>
    )
}
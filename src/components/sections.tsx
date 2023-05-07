import axios from "axios";
import { useState, useEffect } from "react";
import StudentSection from "./sectionStudent";
import Cookies from "js-cookie";
import Accepted from "./accepted";
import Rejected from "./rejected";
import Pending from "./pending";
import NotSubmitted from "./notsubmitted";

export default function Sections(this: any) {

    const [classes, setClasses] = useState({});
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
        }, (error) => {
            console.log(error);
        });
    }


    if (isClassesLoading || isProfileLoading) {
        return <div /> 
    }

    
    if (classes.reduce((acc: any, e: any) => 
                        e.applications.findIndex((x: any) => x._id === profile.id) !== -1 
                        || e.enrolled.findIndex((x: any) => x._id === profile.id) !== -1 ? false : acc, true)){
        return (
            <>
            <div className="max-w-lg mx-auto space-y-2">
                {classes.map((data: any) => <StudentSection key = {data._id} section = {data.sectionNumber}
                                                professor = {data.professor} status = {<NotSubmitted />}
                                            />)}
            </div>
        </>

        )
    }

    return (
        <>
            <div className="max-w-lg mx-auto space-y-2">
                {classes.map((data: any) => <StudentSection key = {data._id} section = {data.sectionNumber}
                                             professor = {data.professor} status = 
                                             {
                                                data.enrolled.length >= data.cap ? data.enrolled.reduce((acc: any, e: any) => e._id === profile.id ? 
                                                <Accepted /> : acc, <Rejected />) : data.enrolled.reduce((acc: any, e: any) => e._id === profile.id ? 
                                                <Accepted /> : acc, <Pending />)
                                             }/>)}
            </div>
        </>
    )
}
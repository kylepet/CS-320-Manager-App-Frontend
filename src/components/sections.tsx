import axios from "axios";
import { useState, useEffect } from "react";
import StudentSection from "./sectionStudent";
import Cookies from "js-cookie";
import Accepted from "./accepted";
import Rejected from "./capreached";
import Pending from "./pending";
import NotSubmitted from "./notsubmitted";
import { useQuery } from "react-query";
import { allApps, managerPool, sectionDetails } from "../../services/apiSection";
import { getProfile } from "../../services/apiLogin";
import { Input } from "./ui/input";
import CapReached from "./capreached";

export default function Sections(this: any) {

  const classes = useQuery({ queryKey: ["student-sections"], queryFn: managerPool });
  const profile = useQuery({ queryKey: ["student-details"], queryFn: getProfile });
  const apps = useQuery({ queryKey: ["student-applications"], queryFn: allApps });

  if (classes.isLoading || profile.isLoading) {
    return <>Loading</>;
  }

  if (classes.data.length === 0) {
    return <>Loading</>;
  }

  const enrolledIndex = classes.data.reduce((acc: any, e: any) => e.enrolled.findIndex((x: any) => x._id === profile.data.id) !== -1 ? classes.data.indexOf(e) : acc, -1);

  const appIndex = apps.data.reduce((acc: any, e: any) => e.email === profile.data.email ? apps.data.indexOf(e) : acc, -1);

  const preferences = appIndex !== -1 ? apps.data[appIndex].preferences : -1;

  // classes.data.reduce((acc: any, e: any) => e.enrolled.findIndex((x: any) => x._id === profile.data.id)
  //  !== -1 || e.applications.findIndex((x: any) => x.student._id === profile.data.id) !== -1 ? true : acc, false);
  const app_information = true;
  //const app_information = hasSubmitted ? classes.data.reduce((acc: any, e: any) => e.applications.findIndex((x: any) => x.student._id === profile.data.id) !== -1 ? e.applications[e.applications.findIndex((x: any) => x.student._id === profile.data.id)] : acc, -1) : -1;


   console.log(apps);
   console.log(classes);
   console.log(Cookies.get('access_token'));

  return (
    <>
      <div className="max-w-lg mx-auto space-y-2">
        {classes.data.map((data: any) => (
          <StudentSection
            key={data._id}
            section={data.sectionNumber}
            professor={data.professor}
            enrolled={data.enrolled.filter((elem: any, index: number) => 
              data.enrolled.findIndex((e: any) => e.email === elem.email) === index)}
            cap={data.cap}
            schedule={data.schedule}
            status={
              data.enrolled.findIndex((e: any) => e._id === profile.data.id) !==
              -1 ? (
                <Accepted />
              ) : data.enrolled.filter((elem: any, index: number) => 
              data.enrolled.findIndex((e: any) => e.email === elem.email) === index).length >= data.cap ? (
                <CapReached />
              ) : appIndex === -1 || apps.data[appIndex].preferences.indexOf(data.sectionNumber) === -1 ? (
                <NotSubmitted section={true} />
              ) : (
                <Pending applications={apps.data} email={profile.data.email} number={data.sectionNumber} preferences={preferences}/>
              )
            }
          />
        ))}
      </div>
    </>
  );
}

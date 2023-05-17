import axios from "axios";
import { useState, useEffect } from "react";
import StudentSection from "./sectionStudent";
import Accepted from "./accepted";
import Rejected from "./rejected";
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

  const appIndex = apps.data.findIndex((e: any) => e.email === profile.data.email);

  const consideredApplications = classes.data.reduce((acc: any, e: any) => {
    let idx = e.applications.findIndex((x: any) => x.email === profile.data.email)
    idx !== -1 ? acc.push(e) : acc
    return acc;
  }, []);
  console.log(consideredApplications);

  const preferences = appIndex !== -1 ? apps.data[appIndex].preferences : -1;

  console.log(preferences);
   console.log(apps);
   console.log(classes);

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
              ) : appIndex !== -1 && preferences !== -1 && preferences.indexOf(data.sectionNumber) !== -1 && consideredApplications.findIndex((e: any) => e.sectionNumber === data.sectionNumber) === -1
              ? (
                <Rejected />
              ) :
              data.enrolled.filter((elem: any, index: number) => 
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

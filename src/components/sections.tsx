import axios from "axios";
import { useState, useEffect } from "react";
import StudentSection from "./sectionStudent";
import Cookies from "js-cookie";
import Accepted from "./accepted";
import Rejected from "./rejected";
import Pending from "./pending";
import NotSubmitted from "./notsubmitted";
import { useQuery } from "react-query";
import { managerPool, sectionDetails } from "../../services/apiSection";
import { getProfile } from "../../services/apiLogin";

export default function Sections(this: any) {

  const classes = useQuery({ queryKey: ["student-sections"], queryFn: managerPool });
  const profile = useQuery({ queryKey: ["student-details"], queryFn: getProfile });
 
  console.log(classes);

  if (classes.isLoading || profile.isLoading) {
    return <>Loading</>;
  }

  if (classes.data.length === 0) {
    return <>Loading</>;
  }

  return (
    <>
      <div className="max-w-lg mx-auto space-y-2">
        {classes.data.map((data: any) => (
          <StudentSection
            key={data._id}
            section={data.sectionNumber}
            professor={data.professor}
            status={
              data.enrolled.findIndex((e: any) => e._id === profile.id) !==
              -1 ? (
                <Accepted />
              ) : data.enrolled.length >= data.cap ? (
                <Rejected />
              ) : data.applications.findIndex(
                  (e: any) => e.student._id === profile.id
                ) === -1 ? (
                <NotSubmitted />
              ) : (
                <Pending />
              )
            }
          />
        ))}
      </div>
    </>
  );
}

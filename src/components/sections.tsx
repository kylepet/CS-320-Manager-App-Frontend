import StudentSection from "./sectionStudent"
import Accepted from "./accepted"
import Rejected from "./rejected"
import Pending from "./pending"
import NotSubmitted from "./notsubmitted"
import { useQuery } from "react-query"
import { API } from "@/lib/api"
import CapReached from "./capreached"

export default function Sections(this: any) {
  const classes = useQuery({
    queryKey: ["student-sections"],
    queryFn: API.getManagerPool,
  })
  const profile = useQuery({
    queryKey: ["student-details"],
    queryFn: API.getProfile,
  })
  const apps = useQuery({
    queryKey: ["student-applications"],
    queryFn: API.getAllStudentApplications,
  })

  if (classes.isLoading || profile.isLoading || apps.isLoading) {
    return <>Loading</>
  }

  if (classes.data.length === 0) {
    return <>Loading</>
  }

  const appIndex = apps.data.findIndex(
    (e: any) => e.email === profile.data.email
  )

  const consideredApplications = classes.data.reduce((acc: any, e: any) => {
    const idx = e.applications.findIndex(
      (x: any) => x.email === profile.data.email
    )
    idx !== -1 ? acc.push(e) : acc
    return acc
  }, [])

  const preferences = appIndex !== -1 ? apps.data[appIndex].preferences : -1

  return (
    <>
      <div className="max-w-lg mx-auto space-y-2">
        {classes.data.map((data: any) => (
          <StudentSection
            key={data._id}
            section={data.sectionNumber}
            professor={data.professor}
            enrolled={data.enrolled.filter(
              (elem: any, index: number) =>
                data.enrolled.findIndex((e: any) => e.email === elem.email) ===
                index
            )}
            cap={data.cap}
            schedule={data.schedule}
            status={
              data.enrolled.findIndex((e: any) => e._id === profile.data.id) !==
              -1 ? (
                <Accepted />
              ) : appIndex !== -1 &&
                preferences !== -1 &&
                preferences.indexOf(data.sectionNumber) !== -1 &&
                consideredApplications.findIndex(
                  (e: any) => e.sectionNumber === data.sectionNumber
                ) === -1 ? (
                <Rejected />
              ) : data.enrolled.filter(
                  (elem: any, index: number) =>
                    data.enrolled.findIndex(
                      (e: any) => e.email === elem.email
                    ) === index
                ).length >= data.cap ? (
                <CapReached />
              ) : appIndex === -1 ||
                apps.data[appIndex].preferences.indexOf(data.sectionNumber) ===
                  -1 ? (
                <NotSubmitted section={true} />
              ) : (
                <Pending
                  applications={apps.data}
                  email={profile.data.email}
                  number={data.sectionNumber}
                  preferences={preferences}
                />
              )
            }
          />
        ))}
      </div>
    </>
  )
}

import Head from "next/head";
import { Cookie, Inter } from "next/font/google";
import { useQuery } from "react-query";
import { allApps, managerPool, sectionDetails } from "../../services/apiSection";
import StudentSection from "@/components/sectionStudent";
import Sections from "@/components/sections";
import Logout from "@/components/logout";
import { useRouter } from "next/router";
import SubmissionForm from "@/components/submissionform";
import { getProfile } from "../../services/apiLogin";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import NotSubmitted from "@/components/notsubmitted";


export default function StudentDashboard(this: any) {

  const classes = useQuery({ queryKey: ["student-sections"], queryFn: managerPool });
  const profile = useQuery({ queryKey: ["student-details"], queryFn: getProfile });
  const apps = useQuery({ queryKey: ["student-applications"], queryFn: allApps });


  if (profile.isLoading || classes.isLoading) {
    return <>Loading</>
  }

  const enrolledIndex = classes.data.reduce((acc: any, e: any) => e.enrolled.findIndex((x: any) => x._id === profile.data.id) !== -1 ? classes.data.indexOf(e) : acc, -1);

  const appIndex = apps.data.reduce((acc: any, e: any) => e.email === profile.data.email ? apps.data.indexOf(e) : acc, -1);

  console.log(enrolledIndex);
  console.log(appIndex);
  console.log(classes);


  return (
    <>
      <Head>
        <title>Student Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="mt-8 space-y-2">
        <div className="max-w-lg mx-auto space-y-2 text-black text-lg font-semibold">
        <Collapsible>
        <CollapsibleTrigger className="w-half block">
          <div className="flex items-center bg-cyan-400 px-6 py-4 justify-between text-black">
          {profile.data.username}
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-3 py-3 bg-white w-half">
            {enrolledIndex !== -1 ? 
            <li className="bg-green-100 px-3 py-2 rounded flex justify-between items-center">
              <span className="flex justify-between items-center text-base font-normal">
                  Accepted into {classes.data[enrolledIndex].sectionNumber} with {classes.data[enrolledIndex].professor.name}
              </span>
            </li>
            : appIndex !== -1 ? 
            <div className="bg-yellow-100 px-3 py-2 rounded text-base font-normal">
            <div>
                You have applied to sections {apps.data[appIndex].preferences.join(', ')}
            </div>
            <div>
              320 Grade: {apps.data[appIndex].grade320}
            </div>
            <div>
              References: {apps.data[appIndex].references}
            </div>
        </div>
            : <div className="text-base font-normal"><NotSubmitted section={false} sectionList={classes}/></div>}
          </div>
        </CollapsibleContent>
      </Collapsible>
          <div className="mb-4 flex justify-between items-center text-white">
            <span className="text-lg font-semibold text-white">
              Sections
            </span>
            <Logout />
          </div>
        </div>

        <div className="max-w-lg mx-auto space-y-2">
          <Sections></Sections>
        </div>
      </main>
    </>
  );
}

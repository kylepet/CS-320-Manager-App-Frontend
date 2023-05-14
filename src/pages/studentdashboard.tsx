import Head from "next/head";
import { Cookie, Inter } from "next/font/google";
import { useQuery } from "react-query";
import { sectionDetails } from "../../services/apiSection";
import StudentSection from "@/components/sectionStudent";
import Sections from "@/components/sections";
import Logout from "@/components/logout";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import SubmissionForm from "@/components/submissionform";


export default function StudentDashboard(this: any) {
  return (
    <>
      <Head>
        <title>Student Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="mt-8">
        <div className="max-w-lg mx-auto space-y-2">
          <div className="mb-4 flex justify-between items-center">
            <span className="text-lg font-semibold text-cyan-800">
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

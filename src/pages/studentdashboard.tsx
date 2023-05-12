import Head from "next/head";
import { Cookie, Inter } from "next/font/google";
import { useQuery } from "react-query";
import { sectionDetails } from "../../services/apiSection";
import StudentSection from "@/components/sectionStudent";
import Sections from "@/components/sections";
import axios from "axios";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import SubmissionForm from "@/components/submissionform";

export default function StudentDashboard(this: any) {
  const router = useRouter();
  function logout() {
    Cookies.remove("access_token");
    router.push({
      pathname: "/",
    });
  }

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
            <Button variant="outline" onClick={logout}>
              <div /> Log-out
            </Button>
          </div>
        </div>

        <div className="max-w-lg mx-auto space-y-2">
          <Sections></Sections>
        </div>
      </main>
    </>
  );
}

import Head from 'next/head'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { Button } from "@/components/ui/button"
  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"  
import {Check, Cross, Crosshair, CrossIcon, Delete, Frown, Trash, UtensilsCrossed, XIcon} from 'lucide-react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getProfile } from '../../services/apiLogin'
import { sectionDetails, managerPool} from '../../services/apiSection'
import Logout from '@/components/logout'
import { accept, allApplications } from '../../services/apiSubmit'

export default function Dashboard() {
    const queryClient = useQueryClient();
    
    const allApplicationsQuery = useQuery({ queryKey: ["student-apps-all-applications"], queryFn: allApplications });
    const managerPoolQuery = useQuery({ queryKey: ["manager-pool"], queryFn: managerPool });
    const getProfileQuery = useQuery({ queryKey: ["profile"], queryFn: getProfile });
    const sectionDetailsQuery = useQuery({ queryKey: ["sections"], queryFn: sectionDetails });

    if (allApplicationsQuery.isLoading || managerPoolQuery.isLoading || getProfileQuery.isLoading || sectionDetailsQuery.isLoading) {
        return <>Loading</>;
    }

    const mySections = managerPoolQuery.data.filter((section: any) => 
        section.professor.email == getProfileQuery.data.email
    )
    const otherSections = managerPoolQuery.data.filter((section: any) =>
        section.professor.email != getProfileQuery.data.email
    )


    console.log({
        allApplications: allApplicationsQuery.data,
        managerPool: managerPoolQuery.data,
        getProfile: getProfileQuery.data,
        sectionDetails: sectionDetailsQuery.data,
        mySections
    });

    const decide = (acceptInput: boolean, studEmail: string) =>{
        const decideStudent = useMutation({
            // queryKey: ["login"],
            mutationFn: accept,
            onSuccess: async () => {
                console.log("Student decided")
                window.location.reload();
                await queryClient.invalidateQueries({queryKey: ["student-apps-all-applications"]});
                await queryClient.invalidateQueries({queryKey: ["manager-pool"]});
                await queryClient.invalidateQueries({queryKey: ["profile"]});
                await queryClient.invalidateQueries({queryKey: ["sections"]});
            },
            onError: async (error: any) => {
                console.log(error.response.data.message);
                await queryClient.invalidateQueries({queryKey: ["student-apps-all-applications"]});
                await queryClient.invalidateQueries({queryKey: ["manager-pool"]});
                await queryClient.invalidateQueries({queryKey: ["profile"]});
                await queryClient.invalidateQueries({queryKey: ["sections"]});
            },
        });

        decideStudent.mutate({
            accept: acceptInput,
            studEmail,
            profEmail: getProfileQuery.data.email,
        })
    }

    return (
      <>
        <Head>
          <title>Dashboard</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main className="mt-8">
            <div className="max-w-lg mx-auto space-y-2">
                <div className="mb-4 flex justify-between items-center">
                    <span className="text-lg font-semibold text-cyan-800">{getProfileQuery.data.name}'s Sections</span>
                    <div className="flex justify-between items-center space-x-2">
                        <Logout />
                    </div>
                </div>

                {mySections.map((data: any) => (
                    <Collapsible key={data._id}>
                        <CollapsibleTrigger className="w-full block">
                            <div className="flex items-center bg-cyan-400 px-6 py-4 justify-between">
                                <div className="text-cyan-950 font-semibold">
                                    Section {data.sectionNumber}
                                </div>
                                {"Enrolled: " + data.enrolled.length + "/"}
                                {data.cap}
                            </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <div className="px-3 py-3 bg-white">
                                    <div>
                                        Schedule
                                    </div>
                                <div className={"bg-pink-400 rounded px-2 py-2"}>
                                    {data.schedule.map((data: any) =>(
                                        <div>
                                            {data}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <ul className="space-y-2">
                                        <h1 className={"pt-2"}>
                                            Applications
                                        </h1>
                                        {
                                            data.applications.length === 0 ? (
                                                <div className={"bg-green-400 px-3 py-2 rounded"}>
                                                    None Yet
                                                </div>
                                            ) : ""
                                        }
                                        {
                                            data.applications.map((data: any) => (
                                                <li className="bg-yellow-100 px-3 py-2 rounded flex justify-between items-center">
                                                    <span className="flex justify-between items-center">
                                                        <ExclamationCircleIcon className="h-4 w-4 mr-1 text-yellow-500" />
                                                        {data.student.name}
                                                    </span>
                                                    <span className="space-x-2">
                                                        <Button id={data.student._id + "+accept"} size='sm' variant='subtle'>
                                                            <Check className="h-4 w-4" />
                                                        </Button>
                                                        <Button id={data.student._id + "+deny"} size='sm' variant='destructive'>
                                                            <XIcon className="h-4 w-4" />
                                                        </Button>
                                                    </span>
                                                </li>
                                            ))
                                        }


                                    </ul>

                                    <ul className="space-y-2">
                                        <h1 className={"pt-2"}>
                                            Enrolled
                                        </h1>
                                        {
                                            data.enrolled.length === 0 ? (
                                                <div className={"bg-green-400 px-3 py-2 rounded"}>
                                                    None Yet
                                                </div>
                                            ) : ""
                                        }
                                        {
                                            data.enrolled.map((data: any) => (
                                                data.name == undefined ? "" : (
                                                    <li className="bg-yellow-100 px-3 py-2 rounded flex justify-between items-center">
                                                    <span className="flex justify-between items-center">
                                                        <ExclamationCircleIcon className="h-4 w-4 mr-1 text-yellow-500" />
                                                        {data.name}
                                                    </span>
                                                    </li>
                                                )

                                            ))
                                        }
                                    </ul>

                                </div>
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                ))}

                <div className="max-w-lg mx-auto space-y-2">
                    <div className="mb-4 flex justify-between items-center">
                        <span className="text-lg font-semibold text-cyan-800 pt-5">Other Sections</span>
                    </div>
                </div>
                {otherSections.map((data: any) => (
                    <Collapsible key={data._id}>
                        <CollapsibleTrigger className="w-full block">
                            <div className="flex items-center bg-cyan-400 px-6 py-4 justify-between">
                                <div className="text-cyan-950 font-semibold">
                                    Section {data.sectionNumber}
                                </div>
                                {"Enrolled: " + data.enrolled.length + "/"}
                                {data.cap}

                            </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <div className="px-3 py-3 bg-white">
                                <div>
                                    <ul className="space-y-2">
                                            <div>
                                                Schedule
                                            </div>
                                        <div className={"bg-pink-400 rounded px-2 py-2"}>
                                            {data.schedule.map((data: any) =>(
                                                <div>
                                                    {data}
                                                </div>
                                            ))}
                                        </div>

                                        <h1>Applications</h1>

                                            {
                                                data.applications.length === 0 ? (
                                                <div className={"bg-green-400 px-3 py-2 rounded"}>
                                                    None Yet
                                                </div>
                                            ) : ""
                                            }

                                        {

                                            data.applications.map((data: any) => (
                                                <li className="bg-yellow-100 px-3 py-2 rounded flex justify-between items-center">
                                                    <span className="flex justify-between items-center">
                                                        <ExclamationCircleIcon className="h-4 w-4 mr-1 text-yellow-500 " />
                                                        <div className={"grid columns-1"}>
                                                            <div>
                                                                {data.student.name}
                                                            </div>
                                                            <div>
                                                                {data.email}
                                                            </div>
                                                        </div>
                                                    </span>
                                                </li>
                                            ))
                                        }
                                        <ul className="space-y-2">
                                            <h1 className={"pt-2"}>
                                                Enrolled
                                            </h1>
                                            {
                                                data.enrolled.length === 0 ? (
                                                    <div className={"bg-green-400 px-3 py-2 rounded"}>
                                                        None Yet
                                                    </div>
                                                ) : ""
                                            }
                                            {
                                                data.enrolled.map((data: any) => (
                                                        data.name == undefined ? "" : (
                                                                <li className="bg-green-200 px-3 py-2 rounded flex justify-between items-center">
                                                                    <span className="flex justify-between items-center h-10">
                                                                        {data.name}
                                                                    </span>
                                                                </li>
                                                        )

                                                ))
                                            }
                                        </ul>


                                    </ul>
                                </div>
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                ))}
            </div>
        </main>
      </>
    )
  }
  
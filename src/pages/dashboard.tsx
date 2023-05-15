import Head from 'next/head'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { Button } from "@/components/ui/button"
  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"  
import { Check, Trash } from 'lucide-react'
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
                    <span className="text-lg font-semibold text-cyan-800">Your Sections</span>
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
                            </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <div className="px-3 py-3 bg-white">
                                <div>
                                    <ul className="space-y-2">
                                        {
                                            data.applications.map((data: any) => (
                                                <li className="bg-yellow-100 px-3 py-2 rounded flex justify-between items-center">
                                                    <span className="flex justify-between items-center">
                                                        <ExclamationCircleIcon className="h-4 w-4 mr-1 text-yellow-500" />
                                                        {data.email}
                                                    </span>
                                                    <span className="space-x-2">
                                                        <Button size='sm' variant='subtle'>
                                                            <Check className="h-4 w-4" />
                                                        </Button>
                                                        <Button size='sm' variant='destructive'>
                                                            <Trash className="h-4 w-4" />
                                                        </Button>
                                                    </span>
                                                </li>
                                            ))
                                        }
                                    <li className="bg-cyan-100 px-3 py-2 rounded flex justify-between items-center">
                                            <span>Student 1</span>
                                            <span className="space-x-2">
                                                <Button size='sm' variant='destructive'>
                                                    <Trash className="h-4 w-4" />
                                                </Button>
                                            </span>
                                        </li>
                                        <li className="bg-yellow-100 px-3 py-2 rounded flex justify-between items-center">
                                            <span className="flex justify-between items-center">
                                                <ExclamationCircleIcon className="h-4 w-4 mr-1 text-yellow-500" />
                                                Student 2
                                            </span>
                                            <span className="space-x-2">
                                                <Button size='sm' variant='subtle'>
                                                    <Check className="h-4 w-4" />
                                                </Button>
                                                <Button size='sm' variant='destructive'>
                                                    <Trash className="h-4 w-4" />
                                                </Button>
                                            </span>
                                        </li>
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
  
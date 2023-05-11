import Head from 'next/head'
import { ExclamationCircleIcon, PlusIcon } from '@heroicons/react/24/solid'
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"  
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, Trash } from 'lucide-react'
import { useQuery } from 'react-query'
import { getProfile } from '../../services/apiLogin'
import { sectionDetails, managerPool} from '../../services/apiSection'
import Logout from '@/components/logout'

export default function Dashboard() {
    const profile = useQuery({ queryKey: ["student-details"], queryFn: getProfile });
    console.log(profile);
    // const sections = useQuery({ queryKey: ["student-details"], queryFn: sectionDetails });
    // console.log(sections);
    const manager_pool = useQuery({ queryKey: ["student-details"], queryFn: managerPool });
    console.log(manager_pool);
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
                        <AlertDialog>
                        <AlertDialogTrigger asChild>
                                <Button variant="outline">
                                    <PlusIcon className="mr-2 h-4 w-4" /> Create Section
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Create Section</AlertDialogTitle>
                                    <div className="space-y-4">
                                        <div className="text-sm text-cyan-500 dark:text-cyan-400 grid w-full items-center gap-1.5">
                                            <Label htmlFor="section">Section</Label>
                                            <Input className="w-full" type="text" id="section" placeholder="" />
                                        </div>

                                        <div className="text-sm text-cyan-500 dark:text-cyan-400 grid w-full items-center gap-1.5">
                                            <Label htmlFor="todo">TODO</Label>
                                            <Input className="w-full" type="text" id="todo" placeholder="" />
                                        </div>
                                    </div>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Submit</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>

                <Collapsible>
                    <CollapsibleTrigger className="w-full block">
                        <div className="flex items-center bg-cyan-400 px-6 py-4 justify-between">
                            <div className="text-cyan-950 font-semibold">
                                Section 59770
                            </div>
                            <div className="w-6 h-6 bg-yellow-200 rounded-full text-cyan-950 font-semibold">
                                3
                            </div>
                        </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <div className="px-3 py-3 bg-white">
                            <div>
                                <ul className="space-y-2">
                                <li className="bg-cyan-100 px-3 py-2 rounded flex justify-between items-center">
                                        <span>Michael Jordan</span>
                                        <span className="space-x-2">
                                            <Button size='sm' variant='destructive'>
                                                <Trash className="h-4 w-4" />
                                            </Button>
                                        </span>
                                    </li>
                                    <li className="bg-yellow-100 px-3 py-2 rounded flex justify-between items-center">
                                        <span className="flex justify-between items-center">
                                            <ExclamationCircleIcon className="h-4 w-4 mr-1 text-yellow-500" />
                                            Wiz Khalifa
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
            </div>
        </main>
      </>
    )
  }
  
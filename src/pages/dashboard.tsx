import Head from 'next/head'
import { PlusIcon } from '@heroicons/react/24/solid'
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
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

export default function Dashboard() {
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

                <Collapsible>
                    <CollapsibleTrigger className="w-full block">
                        <div className="flex items-center bg-cyan-400 px-6 py-4 justify-between">
                            <div className="text-cyan-950">
                                Section 59770
                            </div>
                            <div className="w-6 h-6 bg-yellow-200 rounded-full text-cyan-950 font-semibold">
                                3
                            </div>
                        </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <div className="px-6 py-2 bg-white">
                            <div>
                                <span>Times:</span>
                                <ul>
                                    <li className="ml-4">TuTh 2:30 PM - 3:45 PM</li>
                                    <li className="ml-4">W 10:10 AM - 11:00 AM</li>
                                </ul>
                            </div>
                            <div>
                                <span>Desired # of PMs: 5</span>
                                <button>Edit</button>
                            </div>
                            <div>
                                <span>Current # of PMs: 2</span>
                                <ul>
                                    <li className="ml-4">Michael Jordan</li>
                                    <li className="ml-4">Wiz Khalifa</li>
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
  
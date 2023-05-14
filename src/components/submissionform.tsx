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
import { MultiSelect } from "react-multi-select-component";
import { useState } from 'react'

export default function SubmissionForm(props: any) {
    console.log(props);
    const options = props.sectionList ? props.sectionList.data.map((e: any) => { return {label: e.sectionNumber, value: e.sectionNumber}}) : [];
    const [selected, setSelected] = useState([]);
    return (
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline">
                        Submit!
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Submission Form</AlertDialogTitle>
                        <div className="space-y-4">
                            <div className="text-sm text-cyan-500 dark:text-cyan-400 grid w-full items-center gap-1.5 bg-cyan-900">
                                <Label htmlFor="Email">Preferred Section: </Label>
                                <MultiSelect options={options} value={selected} onChange={setSelected} labelledBy={'Select'} className='text-black'/>
                            </div>
                            <div className="text-sm text-cyan-500 dark:text-cyan-400 grid w-full items-center gap-1.5">
                                <Label htmlFor="Email">Email</Label>
                                <Input className="w-full" type="text" id="email" placeholder="" />
                            </div>

                            <div className="text-sm text-cyan-500 dark:text-cyan-400 items-start">
                                <Label htmlFor="Have you taken 320?">Have you taken 320?</Label>
                                <Input className="items-start" type="checkbox" id="taken-320" placeholder="" />
                            </div>

                            <div className="text-sm text-cyan-500 dark:text-cyan-400 grid w-full items-center gap-1.5">
                                <Label htmlFor="Email">Previous Grade in 320: </Label>
                                <select className='flex h-10 w-full rounded-md border border-cyan-300 bg-transparent py-2 px-3 text-sm placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-cyan-700 dark:text-cyan-50 dark:focus:ring-cyan-400 dark:focus:ring-offset-cyan-900'>
                                    <option className='bg-cyan-900' value='A'>A</option>
                                    <option className='bg-cyan-900'value='Other'>Other</option>
                                </select>
                            </div>

                            
                        </div>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Submit</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
    )
}
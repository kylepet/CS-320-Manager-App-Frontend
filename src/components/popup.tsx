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

export default function SubmissionForm(props: any) {
    return (
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
    )
}
import React, { useState } from 'react';
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
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {MultiSelect} from "react-multi-select-component";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {accept, submit} from "../../services/apiSubmit";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    studentEmail: string;
    profEmail: string;
    accepted: boolean;
    student: any;
    application: any;
}

function Modal(props: ModalProps) {
    const { isOpen, onClose, studentEmail, profEmail, accepted , student, application} = props;
    const [isModalOpen, setIsModalOpen] = useState(true);
    const queryClient = useQueryClient();
    const acceptDenyStudent = useMutation({
        // queryKey: ["login"],
        mutationFn: accept,
        onSuccess: async (data: any) => {
            // Invalidate and refetch
            console.log("Application submitted")

            queryClient.invalidateQueries({ queryKey: ["accept"] });
        },
        onError: (error: any) => {
            console.log(error.response.data.message);

            queryClient.invalidateQueries({ queryKey: ["accept"] });
        },
    });

    if (!isOpen) {
        return null;
    }
    function openModal() {
        setIsModalOpen(true)
    }

    function handleCloseModal(submit: boolean) {
        if(submit){
            console.log(accepted, studentEmail, profEmail)
            acceptDenyStudent.mutate({
                accept: accepted,
                studEmail: studentEmail,
                profEmail: profEmail
            })
            window.location.reload();
        }
       onClose()
    }

    let count;
    return (
        <AlertDialog open={true}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    {accepted ? (<AlertDialogTitle>Accept {student.name}?</AlertDialogTitle>):(<AlertDialogTitle>Deny {student.name}? </AlertDialogTitle>)}
                </AlertDialogHeader>


                <div className={" text-sm space-y-4 text-cyan-500 dark:text-cyan-400 w-full items-center gap-1.5 bg-cyan-900"}>
                    {student.email}
                    {
                        application.preferences.map((data: any) =>(
                        <div>
                            {data}
                        </div>
                    ))
                    }
                    <div>
                        {application.grade320}
                    </div>
                    <div>
                        {application.taken320 ? (student.name + " has taken 320") : (student.name + " has not taken 320")}
                    </div>
                    <div>
                        {application.references}
                    </div>

                </div>

                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => handleCloseModal(false)}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleCloseModal(true)}>Submit</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default Modal;

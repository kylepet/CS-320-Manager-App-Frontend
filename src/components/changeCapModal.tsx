import React, { useState } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useMutation } from "react-query"
import { API } from "@/lib/api"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

//This component uses the alert-dialog component to change the course cap.
/**
 *
 * @param props JSON containing sectionNumber, currentCap, profEmail, boolean containing if the modal is open
 * and a function of what to do on closing the modal
 * @returns {JSX} a modal in the form of a component to change the cap.
 */
function Modal(props: {
  sectionNumber: any
  currentCap: any
  profEmail: string
  isOpen: boolean
  onClose: () => void
}) {
  //state to keep trach of the current change in the cap.
  const [inputs, setInputs] = useState({ capChange: 0 })
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }

  //makes API post request to send data to the backend.
  const changeCap = useMutation({
    mutationFn: API.changeCap,
    onSuccess: async () => {},
    onError: (error: any) => {
      console.log(error.response.data.message)
    },
  })

  if (!props.isOpen) {
    return null
  }

  //closes modal on submit
  function handleCloseModal(submit: boolean) {
    if (submit) {
      changeCap.mutate({
        profEmail: props.profEmail,
        capChange: inputs.capChange,
      })
    }
    props.onClose()
  }

  //JSX containing the change cap itself.

  return (
    <AlertDialog open={true}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Modify Cap of Section {props.sectionNumber}
          </AlertDialogTitle>
        </AlertDialogHeader>

        <div
          className={
            "text-sm space-y-4 text-cyan-500 dark:text-cyan-400 w-full items-center gap-1.5 space-y-5 bg-cyan-900"
          }
        >
          <div>
            <Label htmlFor="current-value">Current Cap</Label>
            <Input
              id="number"
              disabled
              type="number"
              value={props.currentCap}
            />
          </div>
          <div>
            <Label htmlFor="capChange">New Cap</Label>
            <Input
              name="capChange"
              id="capChange"
              type="number"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => handleCloseModal(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => handleCloseModal(true)}>
            Submit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Modal

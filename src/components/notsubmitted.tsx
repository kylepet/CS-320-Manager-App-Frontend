import { Button } from "./ui/button";

export default function NotSubmitted() {
    return (
        <li className="bg-purple-100 px-3 py-2 rounded flex justify-between items-center">
            <span className="flex justify-between items-center">
                You haven't submitted an application, submit here: 
            </span>
            <span className="space-x-2">
                <Button size='sm'>
                    Submit!
                </Button>
            </span>
        </li>
);}
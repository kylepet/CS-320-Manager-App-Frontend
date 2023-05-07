import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { Trash, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import Accepted from "./accepted";
import Rejected from "./rejected";
import Pending from "./pending";

export default function StudentSection(props: any) {
    return (
        <>
         <Collapsible>
                    <CollapsibleTrigger className="w-full block">
                        <div className="flex items-center bg-cyan-400 px-6 py-4 justify-between">
                            <div className="text-cyan-950 font-semibold">
                                Section {props.section}
                            </div>
                        </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <div className="px-3 py-3 bg-white">
                            <div>
                                <ul className="space-y-2">
                                <li className="bg-cyan-100 px-3 py-2 rounded flex justify-between items-center">
                                        <span>Professor: {props.professor.name}</span>
                                        <span className="space-x-2">
                                        </span>
                                    </li>
                                {props.status}
                                </ul>
                            </div>
                        </div>
                    </CollapsibleContent>
                </Collapsible>   
        </>
    );
}
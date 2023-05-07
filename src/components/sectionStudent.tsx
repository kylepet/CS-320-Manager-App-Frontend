import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { Trash, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

export default function StudentSection() {
    return (
        <>
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
        </>
    );
}
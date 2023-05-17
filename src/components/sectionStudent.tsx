import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"

export default function StudentSection(props: any) {
  return (
    <>
      <Collapsible>
        <CollapsibleTrigger className="w-full block">
          <div className="flex items-center bg-cyan-400 px-6 py-4 justify-between">
            <div className="text-cyan-950 font-semibold">
              Section {props.section}
            </div>
            <div>
              <div className="text-cyan-950 font-semibold">
                Enrolled: {`${props.enrolled.length} / ${props.cap}`}
              </div>
            </div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-3 py-3 bg-white">
            <div>
              <ul className="space-y-2">
                <div className="bg-pink-400 rounded px-2 py-2">
                  <div>Schedule:</div>
                  <div>
                    {props.schedule.map((e: any) => (
                      <div>{e}</div>
                    ))}
                  </div>
                </div>
                <li className="bg-cyan-100 px-3 py-2 rounded flex justify-between items-center">
                  <span>Professor: {props.professor.name}</span>
                  <span className="space-x-2"></span>
                </li>
                {props.status}
              </ul>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </>
  )
}

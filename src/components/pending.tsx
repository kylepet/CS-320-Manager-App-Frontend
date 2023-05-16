export default function Pending(props: any) {
    return (
        <li className="bg-yellow-100 px-3 py-2 rounded">
            <div>
                Status: Pending
            </div>
            {/* <div>
                {console.log(props.applications)}
                {console.log(props.id)}
                
                Your application is priority {props.applications.findIndex((e: any) => e.email === props.email) + 1} out of {props.applications.length}
            </div> */}
            <div>
                Your priority for this course is {props.preferences.findIndex((e: any) => e === props.number) + 1} out of {props.preferences.length}
            </div>
        </li>
);}
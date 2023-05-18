import SubmissionForm from "./submissionform"

export default function NotSubmitted(props: any) {
  return (
    <div>
      {props.section ? (
        <>
          <li className="bg-purple-100 px-3 py-2 rounded flex justify-between items-center">
            <span className="flex justify-between items-center">
              You have not submitted an application for this section.
            </span>
          </li>
        </>
      ) : (
        <>
          <li className="bg-purple-100 px-3 py-2 rounded flex justify-between items-center">
            <div>You have not submitted an application, submit here!</div>
            <div>
              <SubmissionForm sectionList={props.sectionList} />
            </div>
          </li>
        </>
      )}
    </div>
  )
}

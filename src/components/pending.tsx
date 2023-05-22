import React from "react"
//Component to display the pending status of an application

/**
 *
 * @param props Javascript object containing the current course number of the associated section, and the preferences array for the applicant.
 * @returns {JSX} JSX representing that an application has been submitted to a particular section and it has not been accepted or rejected.
 */
export default function Pending(props: any) {
  /* Uses tailwind classes to display a yellow background, position text, and round the corners
  Takes in the preference list of the course section as a prop, and finds its index
  in the preference array to determine priority (smaller index = higher priority).*/
  return (
    <li className="bg-yellow-100 px-3 py-2 rounded">
      <div>Status: Pending</div>
      <div>
        Your priority for this course is{" "}
        {props.preferences.findIndex((e: any) => e === props.number) + 1} out of{" "}
        {props.preferences.length}
      </div>
    </li>
  )
}

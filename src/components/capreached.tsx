import React from "react"

//Component which display when the course cap is reached.
/**
 *
 * @returns {JSX} static component which displays if the enrollment cap was reached in a course.
 */
export default function CapReached() {
  return (
    /*Using classes from tailwind to display a red background background, round corners,
    display in the flex style, and move text to the left and right of the component, with the span
    tag to display accepted text. */
    <li className="bg-red-100 px-3 py-2 rounded flex justify-between items-center">
      <span className="flex justify-between items-center">Cap reached.</span>
    </li>
  )
}

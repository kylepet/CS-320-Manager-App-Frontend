import React from 'react'
import { render, fireEvent, waitFor } from "@testing-library/react"
import Home from "@/pages/index"
import { handleSubmit } from "@/pages/index"
import { useRouter } from "next/router"
import router from "next/dist/server/router"
import signin from "@/lib/api"

// Mock the API functions used in the component
jest.mock("@/lib/api", () => ({
  signin: jest.fn(),
}))

describe("Login", () => {
  it("submits the login form and redirects to the appropriate dashboard", async () => {
    
    const { getByLabelText, getByText } = render(<Home/>) //renders username and password info from Home function called in index
    const usernameInput = getByLabelText("username")
    const passwordInput = getByLabelText("password")
    const loginButton = getByText("button")
    const fakeIsStudent = getByText("isStudent")

    // Mock the successful login response
    signin.mockResolvedValueOnce({
      isStudent: fakeIsStudent
    })

    fireEvent.change(usernameInput, { target: { value: "william.lee@umass.edu" } }) //event executed, target value is the email
    fireEvent.change(passwordInput, { target: { value: "F1fH9HxRj4sX" } })
    fireEvent.click(loginButton)

    //action of handleSubmit will be called when the login button is pressed
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        email: "william.lee@umass.edu",
        password: "F1fH9HxRj4sX",
      })
    })


    // Check if the appropriate router.push function was called
    //in this case the fakeIsStudent is set to true already
    if (fakeIsStudent) {
      expect(router.push).toHaveBeenCalledWith({
        pathname: "/studentdashboard",
      })
    } else {
      expect(router.push).toHaveBeenCalledWith({
        pathname: "/dashboard",
      })
    }
  })
})

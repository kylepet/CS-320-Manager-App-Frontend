import React from 'react'
import { render, fireEvent, waitFor } from "@testing-library/react"
import  Home  from "@/pages/index"
import { handleSubmit } from "@/pages/index"
import { useRouter } from "/Users/sophiacox/Desktop/CS-320-Manager-App-Frontend/node_modules/next/dist/client/router.js"
import { API } from "@/lib/api.ts"
import signin from "@/lib/api.ts"
import mockRouter from 'next-router-mock';


jest.mock('next/router', () => require('next-router-mock'));
// Mock the API functions used in the component
jest.mock("/Users/sophiacox/Desktop/CS-320-Manager-App-Frontend/src/lib/api.ts", () => ({
  API: {
    signin: jest.fn(),
  },
}));

// jest.mock(API, () => ({
//   API: {
//     signin: jest.fn()
//   }
// }));

describe ('next-router-mock', () => {
  it('mocks the useRouter hook', async() => {
    // Set the initial url:
    mockRouter.push("/Users/sophiacox/Desktop/CS-320-Manager-App-Frontend/src/pages/index.tsx");
    
    // Render the component:
    // render(<Home/>);
    // expect(screen.getByRole('button')).toHaveText(
    //   'The current route is: "/initial-path"'
    // );


// describe("Login", () => {
//   it("submits the login form and redirects to the appropriate dashboard", async () => {
    
    // const { getByLabelText, getByText } = 
    const homeReturnVar = Home() //renders username and password info from Home function called in index
    const userTest = homeReturnVar.value
    const usernameInput = getByLabelText("username")
    const passwordInput = getByLabelText("password")
    const loginButton = getByText("button")
    const fakeIsStudent = true;

    // Mock the successful login response
    API.signin.mockResolvedValueOnce({});

    fireEvent.change(usernameInput, { target: { value: "william.lee@umass.edu" } }) //event executed, target value is the email
    fireEvent.change(passwordInput, { target: { value: "kiento" } })
    fireEvent.click(loginButton)

    //action of handleSubmit will be called when the login button is pressed
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        email: "william.lee@umass.edu",
        password: "kiento",
      })
    })

    // Check if the appropriate router.push function was called
    expect(useRouter().push).toHaveBeenCalledWith("/studentdashboard");
  })
})

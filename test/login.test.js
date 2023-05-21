import React from 'react'
import { render, fireEvent, waitFor } from "@testing-library/react"
import Home from "@/pages/index"
import { handleSubmit } from "@/pages/index"
import { useRouter } from "next/router"
import { API } from "@/lib/api.ts"
import signin from "@/lib/api"

jest.mock('next/router', () => require('next-router-mock'));
// Mock the API functions used in the component
jest.mock("@/lib/api.ts", () => ({
  API: {
    signin: jest.fn(),
  },
}));

describe("Login", () => {
  it("submits the login form and redirects to the appropriate dashboard", async () => {
    
    const { getByLabelText, getByText } = render(<Home/>) //renders username and password info from Home function called in index
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

// // import React from 'react'
// // import { useRouter } from 'next/router';
// // import { render, screen, waitFor } from '@testing-library/react';
// // import { QueryClientProvider, QueryClient, useQuery } from 'react-query';
// // import StudentDashboard from '@/pages/studentdashboard';
// // import { API } from '@/lib/api';
// // import mockRouter from 'next-router-mock';
// import '@testing-library/jest-dom'
// // import Home from '@/pages/index';

// jest.mock('next/router', () => require('next-router-mock'));

//   test('submits the login form and redirects to the appropriate dashboard', async () => {

//     const { getByLabelText, getByText } = render(<Home/>) //renders username and password info from Home function called in index
//     const usernameInput = getByLabelText("username")
//     const passwordInput = getByLabelText("password")
//     const loginButton = getByText("button")


//     // Mock the successful login response
//     API.signin.mockResolvedValueOnce({});

//     fireEvent.change(usernameInput, { target: { value: "william.lee@umass.edu" } }) //event executed, target value is the email
//     fireEvent.change(passwordInput, { target: { value: "kiento" } })
//     fireEvent.click(loginButton)

//     //action of handleSubmit will be called when the login button is pressed
//     await waitFor(() => {
//       expect(handleSubmit).toHaveBeenCalledWith({
//         email: "william.lee@umass.edu",
//         password: "kiento",
//       })
//     })

//     // Check if the appropriate router.push function was called
//     expect(useRouter().push).toHaveBeenCalledWith("/studentdashboard");

//     // expect(screen.getByText('Loading')).toBeInTheDocument();

//   });

import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import Dashboard from "@/pages/dashboard"
import "@testing-library/jest-dom/extend-expect"

// Mock the API functions used in the component
jest.mock("@/lib/api", () => ({
  getAllStudentApplications: jest.fn(),
  getManagerPool: jest.fn(),
  getProfile: jest.fn(),
  getSections: jest.fn(),
  changeCap: jest.fn(),
}))

describe("Dashboard", () => {
  let queryClient

  beforeEach(() => {
    queryClient = new QueryClient()
  })

  afterEach(() => {
    jest.clearAllMocks()
    QueryClient.clear()
  })

  test("renders the dashboard correctly", async () => {
    // the API responses
    const mockAllApplications = { isLoading: false, data: [] }
    const mockManagerPool = { isLoading: false, data: [] }
    const mockProfile = {
      isLoading: false,
      data: { name: "Michael Davis", email: "michael.davis@cs.umass.edu" },
    }
    const mockSectionDetails = { isLoading: false, data: [] }

    // Set up the API mocks
    jest
      .spyOn(require("@/lib/api"), "getAllStudentApplications")
      .mockImplementation(() => mockAllApplications)
    jest
      .spyOn(require("@/lib/api"), "getManagerPool")
      .mockImplementation(() => mockManagerPool)
    jest
      .spyOn(require("@/lib/api"), "getProfile")
      .mockImplementation(() => mockProfile)
    jest
      .spyOn(require("@/lib/api"), "getSections")
      .mockImplementation(() => mockSectionDetails)

    render(
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    )

    // Wait for the component to finish loading
    await waitFor(() => {
      expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument()
    })

    // Check if the dashboard content is rendered correctly
    expect(screen.getByText(/Michael Davis's Sections/i)).toBeInTheDocument()
    //not sure what text to out here actually
  })
})

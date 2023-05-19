import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import StudentDashboard from "@/pages/studentdashboard";
import * as api from "@/lib/api";
import '@testing-library/jest-dom/extend-expect';

jest.mock("@/lib/api", () => ({
  getManagerPool: jest.fn(),
  getProfile: jest.fn(),
  getAllStudentApplications: jest.fn(),
}));

describe("StudentDashboard", () => {
  let queryClient;

  beforeEach(() => {
    queryClient = new QueryClient();
  });

  afterEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  test("renders the student dashboard correctly", async () => {
    const mockClasses = { data: [] };
    const mockProfile = { data: { username: "William Lee", email: "william.lee@umass.edu" } };
    const mockApps = { data: [] };

    api.getManagerPool.mockResolvedValue(mockClasses);
    api.getProfile.mockResolvedValue(mockProfile);
    api.getAllStudentApplications.mockResolvedValue(mockApps);

    render(
      <QueryClientProvider client={queryClient}>
        <StudentDashboard />
      </QueryClientProvider>
    );

    // Wait for the component to finish loading
    await waitFor(() => {
      expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
    });

    // Check if the student's name is rendered correctly
    expect(screen.getByText(/William Lee/i)).toBeInTheDocument();
  });
});


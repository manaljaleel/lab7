import { render, screen } from "@testing-library/react";
import Projects from "../Projects";

test("renders project title", () => {
  render(<Projects />);
  const titleElement = screen.getByText(/My Projects/i);
  expect(titleElement).toBeInTheDocument();
});

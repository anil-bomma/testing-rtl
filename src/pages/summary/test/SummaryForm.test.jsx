import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
describe("checkbox test", () => {
  test("intial conditions", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole("button", {
      name: /confirm order/i,
    });
    expect(button).toBeDisabled();
  });

  test("should render confirm order button", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });

    const button = screen.getByRole("button", {
      name: /confirm order/i,
    });

    fireEvent.click(checkbox);
    expect(checkbox).toBeEnabled();
    expect(button).toBeEnabled();

    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});

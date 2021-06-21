import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

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

    userEvent.click(checkbox);
    expect(checkbox).toBeEnabled();
    expect(button).toBeEnabled();

    userEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});

describe("popover", () => {
  test("popover intial render, mouseover and mouseout", async () => {
    // popover starts out hidden
    render(<SummaryForm />);
    let nullPopover = screen.queryByText(
      /No ice cream will actually be delivered/
    );
    expect(nullPopover).toBeNull();

    // popover appear upon mouseover of check box label
    const text = screen.getByText(/terms and conditions/i);
    userEvent.hover(text);
    const popover = screen.queryByText(
      /No ice cream will actually be delivered/
    );
    expect(popover).toBeInTheDocument();

    // popover disapper when we mouse out
    userEvent.unhover(text);
    await waitForElementToBeRemoved(() =>
      screen.getByText(/No ice cream will actually be delivered/)
    );
  });
});

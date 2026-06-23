import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";

import {
  describe,
  expect,
  it,
  vi,
} from "vitest";

import CustomerActions from "../components/CustomerActions.jsx";

describe("CustomerActions", () => {
  it("Should display the Add Customer button", () => {
    // Arrange
    render(
      <CustomerActions
        setShowModal={vi.fn()}
        setEditing={vi.fn()}
      />
    );

    // Act
    const result = screen.getByRole(
      "button",
      {
        name: "Add Customer",
      }
    );

    // Assert
    expect(result).toBeInTheDocument();
  });

  it("Should open the Add Customer modal when the button is clicked", () => {
    // Arrange
    const setShowModal = vi.fn();
    const setEditing = vi.fn();

    render(
      <CustomerActions
        setShowModal={setShowModal}
        setEditing={setEditing}
      />
    );

    const button = screen.getByRole(
      "button",
      {
        name: "Add Customer",
      }
    );

    // Act
    fireEvent.click(button);

    // Assert
    expect(setEditing)
      .toHaveBeenCalledWith(false);

    expect(setShowModal)
      .toHaveBeenCalledWith(true);
  });

  it("Should open the Edit Customer modal when the Edit button is clicked", () => {
    // Arrange
    const setShowModal = vi.fn();
    const setEditing = vi.fn();

    render(
      <CustomerActions
        setShowModal={setShowModal}
        setEditing={setEditing}
      />
    );

    const button = screen.getByRole(
      "button",
      {
        name: "Edit Customer",
      }
    );

    // Act
    fireEvent.click(button);

    // Assert
    expect(setEditing)
      .toHaveBeenCalledWith(true);

    expect(setShowModal)
      .toHaveBeenCalledWith(true);
  });
});
import { render, screen, waitForElementToBeRemoved } from "../test/setup";
import HomePage from "./HomePage";

describe("Home Page", () => {
  describe("Layout", () => {
    it("has id", () => {
      render(<HomePage />);
      const page = screen.queryByTestId("home-page");
      expect(page).toBeInTheDocument();
    });
  });
});

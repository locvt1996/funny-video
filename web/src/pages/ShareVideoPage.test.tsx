import { render, screen } from "../test/setup";
import HomePage from "./ShareVideoPage";

describe("Share Video Page", () => {
  describe("Layout", () => {
    it("has id", () => {
      render(<HomePage />);
      const page = screen.queryByTestId("share-video-page");
      expect(page).toBeInTheDocument();
    });
  });
});

import { render, screen } from "../test/setup";
import ListVideo from "./ListVideo";

describe("ListVideo Component", () => {
  describe("Layout", () => {
    it("has id", () => {
      render(<ListVideo videos={[]} />);
      const component = screen.queryByTestId("list-video");
      expect(component).toBeInTheDocument();
    });
  });
});

import { render, screen } from "../test/setup";
import VideoItem from "./VideoItem";

const initialProps = {
  videoId: "videoId",
  title: "title",
  description: "description",
  uploadBy: "uploadBy.mail.com",
};

describe("ListVideo Component", () => {
  describe("Layout", () => {
    it("has id", () => {
      render(<VideoItem {...initialProps} />);
      const component = screen.queryByTestId("video-item");
      expect(component).toBeInTheDocument();
    });
  });
});

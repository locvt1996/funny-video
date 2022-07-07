import { render, screen } from "./test/setup";
import App from "./App";

describe("Routing", () => {
  it.each`
    path              | pageTestId
    ${"/"}            | ${"home-page"}
    ${"/share-video"} | ${"share-video-page"}
  `("display $pageTestId when path is $path ", ({ path, pageTestId }) => {
    window.history.pushState({}, "", path);
    render(<App />);
    const page = screen.queryByTestId(pageTestId);
    expect(page).toBeInTheDocument();
  });

  it.each`
    path              | pageTestId
    ${"/"}            | ${"share-video-page"}
    ${"/share-video"} | ${"home-page"}
  `(
    "does not display $pageTestId when path is $path ",
    ({ path, pageTestId }) => {
      window.history.pushState({}, "", path);
      render(<App />);
      const page = screen.queryByTestId(pageTestId);
      expect(page).not.toBeInTheDocument();
    }
  );
});

import {
  render,
  screen,
  queryByAttribute,
  RenderResult,
  waitFor,
} from "../test/setup";
import AuthenForm from "./AuthenForm";
import userEvent from "@testing-library/user-event";

import { setupServer } from "msw/node";
import { rest } from "msw";

let requestBody: any;

const server = setupServer(
  rest.post(
    `${process.env.REACT_APP_API_URL}/api/v1/auth/authentication`,
    (req, res, ctx) => {
      requestBody = req.body;
      return res(ctx.status(200));
    }
  )
);

beforeEach(() => {
  server.resetHandlers();
});

beforeAll(() => server.listen());

afterAll(() => server.close());

describe("AuthenForm Component", () => {
  const getById = queryByAttribute.bind(null, "id");

  describe("Layout", () => {
    it("has email input", () => {
      render(<AuthenForm />);
      const element = screen.getByPlaceholderText("Email");
      expect(element).toBeInTheDocument();
    });
    it("has password input", () => {
      render(<AuthenForm />);
      const element = screen.getByPlaceholderText("Password");
      expect(element).toBeInTheDocument();
    });
  });

  describe("Interactions", () => {
    let button: HTMLElement | null,
      emailInput: HTMLElement,
      passwordInput: HTMLElement,
      dom: RenderResult;

    const setup = (email = "user100@mail.com") => {
      dom = render(<AuthenForm />);

      passwordInput = screen.getByPlaceholderText("Password");
      emailInput = screen.getByPlaceholderText("Email");

      userEvent.type(passwordInput, "P4ssword");
      userEvent.type(emailInput, email);

      button = screen.queryByRole("button", {
        name: "Login/Register",
      });
    };

    it("displays loading during api call", () => {
      setup();
      if (button) userEvent.click(button);
      const { container } = dom;
      expect(container.getElementsByClassName("loading").length).toBe(1);
    });

    // it("sends email and password to backend after clicking the button", async () => {
    //   setup();

    //   if (button) userEvent.click(button);

    //   await waitFor(() =>
    //     expect(requestBody).toEqual({
    //       email: "user100@mail.com",
    //       password: "P4ssword",
    //     })
    //   );
    // });
  });
});

import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import configureStore from "./../store/configureStore";

const store = configureStore();

describe("App", () => {
  test("renders", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByTestId(/APP-TEST-ID/i);
    expect(linkElement).toBeInTheDocument();
  });
});

import React from "react";
import TestRenderer from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";

import Home from "./home";

describe("home", () => {
  it("allows a user to login", async () => {
    let component;
    TestRenderer.act(() => {
      component = TestRenderer.create(
        <MockedProvider mocks={[]} addTypename={false}>
          <Home />
        </MockedProvider>
      );
    });

    const tree = component.toJSON();
    expect(component.root.findByType("input")).toBeDefined();
    expect(component.root.findByType("button").children.includes("Login")).toBe(
      true
    );
  });
});

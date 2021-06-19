import React from "react";
import TestRenderer from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";
import User, { GET_USER_QUERY } from "./app";

const mocks = [
  {
    request: {
      query: GET_USER_QUERY,
      variables: {
        name: "james",
      },
    },
    result: {
      data: {
        user: { id: "1", name: "james" },
      },
    },
  },
];

it("renders without error", async () => {
  let component;
  TestRenderer.act(() => {
    component = TestRenderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <User name="james" />
      </MockedProvider>
    );
  });

  const tree = component.toJSON();
  expect(tree.children).toContain("Loading...");

  await TestRenderer.act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0)); // wait for response
  });

  const treeWithData = component.toJSON();
  expect(component.root.findByType("h2").children).toContain(
    "Full Stack JavaScript Starter Kit"
  );
});

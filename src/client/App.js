import React from "react";
import { gql, useQuery } from "@apollo/client";

export const GET_USER_QUERY = gql`
  query GetUser($name: String) {
    user(name: $name) {
      id
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_USER_QUERY, {
    variables: { name: "james" },
  });
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;
  return (
    <div>
      <h2 id="header">Full Stack JavaScript Starter Kit</h2>
    </div>
  );
}

export default App;

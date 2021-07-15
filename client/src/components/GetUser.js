import React from "react";
import { useQuery } from "@apollo/client";
import { USER_DETAILS } from "../Queries/userQueries";

function GetUserDetails() {
  const { loading, error, data } = useQuery(USER_DETAILS, {
    variables: { login: "shazow" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error Looking for the user</p>;

  console.log(data);
  return (
    <div>
      <h1>{data.user.name}</h1>
      <h3>{data.user.bio}</h3>
      <h3>Repositories({data.user.repositories.totalCount})</h3>
      <div className="repos">
        {data.user.repositories.nodes.map((node) => (
          <div>
            <a href={node.url}>{node.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetUserDetails;

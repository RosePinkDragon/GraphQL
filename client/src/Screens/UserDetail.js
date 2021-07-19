import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { USER_DETAILS } from "../Queries/userQueries";
import "../styles/details.css";

const UserDetail = () => {
  const { login } = useParams();
  const { loading, error, data } = useQuery(USER_DETAILS, {
    variables: { login: login },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error Looking for the user</p>;
  if (error) console.log(error);

  console.log(data);
  return (
    <div className="wrap">
      <div className="header">
        <div>
          <img src={data.user.avatarUrl} alt="" />
          <div className="info">
            <h1>{data.user.name}</h1>
            <h3>{data.user.bio}</h3>
          </div>
        </div>
        <Link className="btn" to="/">
          Look For Another ?
        </Link>
      </div>
      <div className="repositories">
        <h3>Repositories({data.user.repositories.totalCount})</h3>
        <div className="repos">
          {data.user.repositories.nodes.map((node) => (
            <div>
              <a href={node.url}>{node.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

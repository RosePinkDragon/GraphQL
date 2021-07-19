import { useQuery } from "@apollo/client";
import React from "react";
import { FAKE_Q } from "../Queries/userQueries";
import "../styles/details.css";

const UserDetail = () => {
  const { loading, error, data } = useQuery(FAKE_Q);

  if (loading) return <p>Loading...</p>;
  if (error) console.log(error);
  if (error) return <p>Error Looking for the user</p>;
  console.log(data);

  return <div className="wrap"></div>;
};

export default UserDetail;

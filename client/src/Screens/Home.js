import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../Queries/userQueries";
import { BiSearchAlt } from "react-icons/bi";
import { VscLoading } from "react-icons/vsc";
import "../styles/search.css";

const Home = () => {
  const [users, setUsers] = useState();
  const [search, setSearch] = useState("");

  const { loading, error, data } = useQuery(GET_USERS, {
    variables: { query: search },
  });

  const handleChange = async (e) => {
    setSearch(e.target.value);
    console.log(data?.search);
    !loading && data && setUsers(data.search);
    !loading && console.log(users);
  };

  return (
    <div className="wrap">
      <div className="search">
        <label htmlFor="search">
          <BiSearchAlt />
        </label>
        <input
          placeholder="Start Looking for a user"
          type="text"
          value={search}
          onChange={(e) => handleChange(e)}
        />
      </div>
      {loading && <VscLoading className="spin" />}
      {error && <div className="error">Search for a proper user</div>}
      {!loading &&
        users &&
        users.nodes.map((node, idx) => (
          <div
            key={node.id}
            className={`search-box ${
              users.nodes.length !== 1 && idx === 0
                ? "round-top"
                : users.nodes.length !== 1 && idx === users.nodes.length - 1
                ? "round-bottom"
                : ""
            }`}
          >
            <h3>
              <Link to={`/user/${node.login}`}>
                {node.name ? node.name : "NULL"}
              </Link>
            </h3>
          </div>
        ))}
    </div>
  );
};

export default Home;

import { gql } from "@apollo/client";

export const USER_DETAILS = gql`
  query GetUserDetails($login: String!) {
    user(login: $login) {
      bio
      bioHTML
      name
      avatarUrl
      repositories(first: 50, isFork: false) {
        totalCount
        nodes {
          name
          url
        }
      }
    }
  }
`;

export const GET_USERS = gql`
  query GetUser($query: String!) {
    search(type: USER, first: 10, query: $query) {
      userCount
      nodes {
        ... on User {
          id
          login
          name
        }
      }
    }
  }
`;

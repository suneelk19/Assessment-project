import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      title
      url
    }
  }
`;

export const GET_PROFILE = gql`
  query GetProfile {
    profile {
      name
      bio
    }
  }
`;
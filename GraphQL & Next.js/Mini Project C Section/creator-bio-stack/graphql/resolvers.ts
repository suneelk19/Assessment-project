const profile = {
  name: "Creator Name",
  bio: "Welcome to my Bio Stack",
};

const projects = [
  {
    id: "1",
    title: "GitHub",
    url: "https://github.com",
  },
  {
    id: "2",
    title: "LinkedIn",
    url: "https://linkedin.com",
  },
  {
    id: "3",
    title: "Portfolio",
    url: "https://example.com",
  },
];

export const resolvers = {
  Query: {
    profile: () => profile,
    projects: () => projects,
  },

  Mutation: {
    updateProfile: (
      _: unknown,
      {
        name,
        bio,
      }: {
        name: string;
        bio: string;
      }
    ) => {
      profile.name = name;
      profile.bio = bio;

      return profile;
    },
  },
};
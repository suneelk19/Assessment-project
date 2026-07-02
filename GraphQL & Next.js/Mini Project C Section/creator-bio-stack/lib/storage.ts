export const getProfile = () => {
  if (typeof window === "undefined") return null;

  const data = localStorage.getItem("profile");

  return data ? JSON.parse(data) : null;
};

export const saveProfile = (
  name: string,
  bio: string
) => {
  localStorage.setItem(
    "profile",
    JSON.stringify({
      name,
      bio,
    })
  );
};

export const getProjects = () => {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem("projects");

  if (data) return JSON.parse(data);

  const projects = [
    {
      id: 1,
      title: "GitHub",
      url: "https://github.com",
    },
    {
      id: 2,
      title: "LinkedIn",
      url: "https://linkedin.com",
    },
    {
      id: 3,
      title: "Portfolio",
      url: "https://example.com",
    },
  ];

  localStorage.setItem(
    "projects",
    JSON.stringify(projects)
  );

  return projects;
};
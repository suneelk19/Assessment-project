"use client";

import { useEffect, useState } from "react";

export default function ProfileHeader() {
  const [name, setName] = useState("Creator Name");
  const [bio, setBio] = useState("Welcome to my Bio Stack!");

  useEffect(() => {
    const profile = localStorage.getItem("profile");

    if (profile) {
      const data = JSON.parse(profile);
      setName(data.name);
      setBio(data.bio);
    }
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      <h1>{name}</h1>

      <p
        style={{
          color: "gray",
          marginTop: "10px",
        }}
      >
        {bio}
      </p>
    </div>
  );
}
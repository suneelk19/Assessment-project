"use client";

import { useState, useEffect } from "react";

import Input from "../ui/Input";
import Button from "../ui/Button";

export default function EditProfile() {
  const [name, setName] = useState("");

  const [bio, setBio] = useState("");

  useEffect(() => {
    const profile = localStorage.getItem("profile");

    if (profile) {
      const data = JSON.parse(profile);

      setName(data.name);

      setBio(data.bio);
    }
  }, []);

  const saveProfile = () => {
    const profile = {
      name,
      bio,
    };

    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );

    window.location.reload();
  };

  return (
    <div className="card">
      <h2>Edit Profile</h2>

      <Input
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        rows={4}
        value={bio}
        placeholder="Enter Bio"
        onChange={(e) => setBio(e.target.value)}
      />

      <Button
        text="Save Profile"
        onClick={saveProfile}
      />
    </div>
  );
}
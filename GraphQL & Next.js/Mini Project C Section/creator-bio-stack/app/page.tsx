"use client";

import MobileLayout from "@/components/layout/MobileLayout";
import ProfileHeader from "@/components/profile/ProfileHeader";
import EditProfile from "@/components/profile/EditProfile";
import ProjectList from "@/components/projects/ProjectList";



export default function Home() {
  return (
    <MobileLayout>
      <ProfileHeader />
      <EditProfile />
      <ProjectList />
    </MobileLayout>
  );
}
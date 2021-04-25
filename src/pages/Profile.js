import React from "react";
import BigCard from "../components/BigCard";
import Header from "../components/Header";

const Profile = () => {
  return (
    <>
      <Header showInviteButton={true} height={'profile'}></Header>
      <BigCard></BigCard>
    </>
  );
};

export default Profile;

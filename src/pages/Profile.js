import React, { useState } from "react";
import BigCard from "../components/BigCard";
import Header from "../components/Header";

const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const [filterValue, setFilterValue] = useState("");

  function handleFilterSelect(newValue) {
    setFilterValue(newValue);
  }
  return (
    <>
      <Header
        onChangeText={handleFilterSelect}
        showInviteButton={true}
        height={"profile"}
      ></Header>
      <BigCard></BigCard>
    </>
  );
};

export default Profile;

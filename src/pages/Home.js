import React, { useState } from "react";
import styled from "styled-components";
import SmallCard from "../components/SmallCard";
import Header from "../components/Header";

const Content = styled.div`
  width: auto;
`;

const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

const Home = () => {
  const [filterValue, setFilterValue] = useState("");

  function handleFilterSelect(newValue) {
    setFilterValue(newValue);
  }

  return (
    <>
      <Header
        onChangeText={handleFilterSelect}
        showFilterButton={true}
        showInviteButton={true}
      />
      <Content>
        <MainContent>
          <SmallCard newValueFilter={filterValue}></SmallCard>
        </MainContent>
      </Content>
    </>
  );
};

export default Home;

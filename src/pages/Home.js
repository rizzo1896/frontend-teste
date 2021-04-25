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

  return (
    <>
      <Header showFilterButton={true} showInviteButton={true}/>
      <Content>
        <MainContent>
          <SmallCard></SmallCard>
        </MainContent>
      </Content>
    </>
  );
};

export default Home;

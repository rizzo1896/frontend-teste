import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";

const Content = styled.div`
  height: 72px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;

  @media (max-width: 425px) {
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeaderLogo = styled.div`
  width: 230px;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  font-size: 20px;
  color: #1e3a8a;
  font-weight: 600;

  @media (max-width: 425px) {
    padding-left: 16px;
    padding-top: 16px;
    margin-bottom:10px;
  }
`;

const HeaderTitle = styled.div`
  padding-left: 16px;
`;

const BarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

const ButtonArea = styled.div`
  display: flex;

  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: space-evenly;
    width: 90vw;
    margin: auto;
    height: auto;
    padding-bottom:20px;
  }
`;

const ButtonInvite = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 8px;
  background-color: #2563eb;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:link {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }

  @media (max-width: 425px) {
    width: inherit;
    display: flex;
    justify-content: start;
  }
`;

const StyledLink = styled(Link)`
  width: inherit;
  text-decoration: none;
  padding-right: 24px;

  @media (max-width: 425px){
    padding-right:0;
  }
`;

const ButtonFilter = styled.select`
  width: inherit;
  height: 40px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  outline:none;
  background-color: #e5e7eb;
  color: #111827;
  margin-right: 24px;
  justify-content: flex-start;
  padding-left: 20px;


  @media (max-width: 425px) {
    margin-bottom:15px;
  }
`;

const SpaceButtonMobile = styled(PersonAddOutlinedIcon)`
  padding-left: 0px;
`;

const TextButton = styled.div`
  @media (max-width: 425px) {
    padding-left: 8px;
  }
`;


const Header = (props) => {

  return (
    <>
      <Content>
        <HeaderLogo>
          <BarContent>
            <div
              style={{
                backgroundColor: "#1C1C1E",
                width: "40.15px",
                height: "5.7px",
                marginBottom: "5px",
                borderRadius: "5px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "#1C1C1E",
                width: "28.68px",
                height: "5.7px",
                margin: "0 auto",
                marginBottom: "5px",
                borderRadius: "5px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "#1C1C1E",
                width: "17.21px",
                height: "5.7px",
                borderRadius: "5px",
                margin: "0 auto",
              }}
            ></div>
          </BarContent>
          <HeaderTitle>{props.titleName || "Attends"}</HeaderTitle>
        </HeaderLogo>
        <ButtonArea>
          {props.showFilterButton === true && (
            <ButtonFilter>
              <option value="">All attendees</option>
              <option value="potential">Potential prospects</option>
              <option value="JP">From Japan</option>
            </ButtonFilter>
          )}
          <StyledLink to="/invite">
            {props.showInviteButton === true && (
              <ButtonInvite>
                <SpaceButtonMobile>
                  <PersonAddOutlinedIcon />
                </SpaceButtonMobile>
                <TextButton>Invite someone</TextButton>
              </ButtonInvite>
            )}
          </StyledLink>
        </ButtonArea>
      </Content>
    </>
  );
};

export default Header;

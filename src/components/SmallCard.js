import React from "react";
import styled from "styled-components";
import ReactCountryFlag from "react-country-flag";
import { useQuery } from "@apollo/client";
import INFO_PERSONS from "../query/index";
import { Link } from "react-router-dom";

const ContentBox = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 96px;
  background-color: #fff;
  border-radius: 8px;
  margin: 10px;
  display: flex;
  align-items: center;
  padding: 24px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.06);
`;

const Info = styled.div`
  margin-left: 20px;
`;

const Name = styled.div`
  color: #1e3a8a;
  margin-bottom: 10px;
  font-weight: 600;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:visited {
    color: #1e3a8a;
  }
`;

const Country = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #4b5563;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ImgFlag = styled(ReactCountryFlag)`
  margin-right: 10px;
`;

const trending = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M15.3334 4L9.00002 10.3333L5.66669 7L0.666687 12"
        stroke="#059669"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3333 4H15.3333V8"
        stroke="#059669"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const LoadAnimation = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px solid gray;
  border-bottom: 10px solid transparent;
  animation: spin .9s linear infinite;
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const SmallCard = () => {
  const { loading, error, data } = useQuery(INFO_PERSONS);
  if (loading) {
    return <p><LoadAnimation /></p>;
  }

  if (error) {
    return <p>an error occurred...</p>;
  }

  return (
    <>
      {data.attendees.map((item, index) => {
        return (
          <>
            {
              <ContentBox key={index}>
                <StyledLink to={`/profile/${item.id}`}>
                  <div>
                    <img
                      src={item.avatar}
                      alt="Avatar"
                      width="48"
                      height="48"
                    />
                  </div>
                </StyledLink>
                <Info>
                  <Name>
                    <StyledLink to={`/profile/${item.id}`}>
                      {`${item.firstName} ${item.lastName}`}{" "}
                    </StyledLink>
                    {item.attendanceRate >= 0.5 ? trending : ""}
                  </Name>
                  <Country>
                    <ImgFlag
                      countryCode={item.country.id}
                      svg
                      title={item.country.name}
                    />
                    {` ${item.country.name}`}
                  </Country>
                </Info>
              </ContentBox>
            }
          </>
        );
      })}
    </>
  );
};

export default SmallCard;

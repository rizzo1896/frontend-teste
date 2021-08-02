import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import styled from "styled-components";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import BarChartOutlinedIcon from "@material-ui/icons/BarChartOutlined";
import ReactCountryFlag from "react-country-flag";

import { useLazyQuery } from "@apollo/client";
import INFO_PERSON from "../query/person";

const ContentBox = styled.div`
  box-sizing: border-box;
  width: auto;
  height: 192px;
  background-color: #fff;
  border-radius: 12px;
  margin: 24px;
  padding: 24px;
  display: flex;
  align-items: center;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.06);

  @media (max-width: 425px) {
    width: auto;
    height: 332px;
    display: flex;
    flex-direction: column;
  }
`;

const InfoBox = styled.div`
  height: 100px;
  width: inherit;
  margin-left: 20px;

  @media (min-width: 450px) and (max-width: 670px) {
    width: inherit;
  }
`;

const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 460px;

  @media (max-width: 425px) {
    width: 200px;
    margin: auto;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
  }
`;

const Name = styled.div`
  color: #1e3a8a;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 20px;

  @media (max-width: 425px) {
    text-align: center;
    width: inherit;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  width: 220px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;

  &:nth-child(even) {
    margin-left: 20px;

    @media (max-width: 425px) {
      margin-left: 0;
    }
  }
`;

const ImgFlag = styled(ReactCountryFlag)`
  margin-right: 5px;
`;

const Space = styled.span`
  padding-left: 8px;
  overflow-x: hidden;
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
  display: flex;
  width: auto;
  height: 70vh;
  align-items: center;
  justify-content: center;
  span {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 10px solid gray;
    border-bottom: 10px solid transparent;
    animation: spin 0.9s linear infinite;
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
  }
`;

const BigCard = () => {
  const [param, setParam] = useState("");
  let { cat } = useParams();

  useEffect(() => {
    setParam(cat);
    person();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [person, { called, loading, data }] = useLazyQuery(INFO_PERSON, {
    variables: {
      user: param,
    },
  });

  if (called & loading) {
    return (
      <LoadAnimation>
        <span></span>
      </LoadAnimation>
    );
  }

  if (!called) {
    return <></>;
  }
  let user = data.attendee;
  return (
    <>
    {/* HelmetProvider + Helmet para deixar o titulo da pagina dinamico*/}
      <HelmetProvider>
        <Helmet>
          <title>User: {`${user.firstName} ${user.lastName}`}</title>
        </Helmet>
      </HelmetProvider>
      <ContentBox>
        <div>
          <img src={user.avatar} width="128" height="128" alt="Avatar" />
        </div>
        <InfoBox>
          <Name>
            {`${user.firstName} ${user.lastName}`}{" "}
            {user.attendanceRate >= 0.5 ? trending : ""}
          </Name>
          <Details>
            <InfoItem>
              <EmailOutlinedIcon fontSize="small" />
              <Space>{user.email}</Space>
            </InfoItem>
            <InfoItem>
              <ImgFlag
                countryCode={user.country.id}
                svg
                title={user.country.name}
              />
              <Space>{user.country.name}</Space>
            </InfoItem>
            <InfoItem>
              <CheckCircleOutlinedIcon fontSize="small" />
              <Space>Attended sessions: {user.sessions}</Space>
            </InfoItem>
            <InfoItem>
              <BarChartOutlinedIcon fontSize="small" />
              <Space>
                Attendance rate: {(user.attendanceRate * 100).toFixed(0)}%
              </Space>
            </InfoItem>
          </Details>
        </InfoBox>
      </ContentBox>
    </>
  );
};

export default BigCard;

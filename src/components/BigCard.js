import React, { useState } from "react";
import styled from "styled-components";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import BarChartOutlinedIcon from "@material-ui/icons/BarChartOutlined";
import { gql, useQuery, useLazyQuery } from "@apollo/client";

import { useParams } from "react-router-dom";

import ReactCountryFlag from "react-country-flag";
import INFO_PERSON from "../query/person";
import { useEffect } from "react";

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
    <g clip-path="url(#clip0)">
      <path
        d="M15.3334 4L9.00002 10.3333L5.66669 7L0.666687 12"
        stroke="#059669"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.3333 4H15.3333V8"
        stroke="#059669"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const BigCard = () => {
  const [param, setParam] = useState("");
  let { cat } = useParams();

  useEffect(() => {
    setParam(cat);
  }, []);

  const { loading, error, data } = useQuery(INFO_PERSON, {
    variables: {
      user: param,
    },
  });
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>an error occurred...</p>;
  }
  let user = data.attendee;
  return (
    <>
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

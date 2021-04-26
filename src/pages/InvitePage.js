import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;

  @media (min-width: 426px) and (max-width: 768px) {
    width: 630px;
  }

  @media (max-width: 768px) {

    margin: 10px auto;
  }

  @media (max-width: 350px) {
    width: 300px;
    margin: 10px auto;
  }
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 768px;
  height: 572px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 425px) {
    width: 343px;
    height: 500px;
  }

  @media (max-width: 350px) {
    width: 280px;
  }
`;

const ItemForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 70px;
  width: 704px;
  margin-top: 24px;
  margin-left: 32px;
  font-size: 16px;
  font-weight: 600;

  @media (min-width: 426px) and (max-width: 768px) {
    width: 600px;
    height: 40px;
    margin-left: 16px;
    margin-bottom: 40px;
  }

  @media (max-width: 425px) {
    width: 311px;
    height: 40px;
    margin-left: 16px;
    margin-bottom: 40px;
  }

  @media (max-width: 350px) {
    width: 250px;
    height: 40px;
    margin-left: 16px;
    margin-bottom: 40px;
  }
`;

const InputForm = styled.input`
  box-sizing: border-box;
  width: inherit;
  height: 40px;
  border-radius: 8px;
  border: 1px solid rgba(209, 213, 219, 1);
  outline: none;
  margin-top: 4px;
  color: rgba(107, 114, 128, 1);
  padding: 16px 8px;
  font-size: 14px;
  font-weight: 500;

  &::placeholder {
    font-weight: 500;
    font-size: 14px;
    color: rgba(17, 24, 39, 1);
  }
`;

const SelectForm = styled.select`
  box-sizing: border-box;
  width: inherit;
  height: 40px;
  border-radius: 8px;
  border: 1px solid rgba(209, 213, 219, 1);
  outline: none;
  margin-top: 4px;
  color: rgba(107, 114, 128, 1);
  font-size: 14px;
  font-weight: 500;
  padding-left: 8px;
`;

const ButtonContainer = styled(ItemForm)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`;

const ButtonForm = styled.button`
  width: 340px;
  height: 40px;
  border-radius: 8px;
  outline: none;
  border: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  @media (min-width: 426px) and (max-width: 768px) {
    width: 290px;
  }

  @media (max-width: 425px) {
    width: 147px;
  }

  @media (max-width: 350px) {
    width: 120px;
  }
`;

const InvitePage = () => {
  return (
    <>
      <Header
        titleName={"Invite someone"}
        showFilterButton={false}
        showInviteButton={false}
      ></Header>

      <Container>
        <Content>
          <form>
            <ItemForm>
              Email <br />
              <InputForm type="email" />
            </ItemForm>
            <ItemForm>
              First name <br />
              <InputForm type="text" />
            </ItemForm>
            <ItemForm>
              Last name <br />
              <InputForm type="text" />
            </ItemForm>

            <ItemForm>
              Country <br />
              <SelectForm>
                <option value="" selected>
                  Select a country
                </option>
                <option value="FR">France</option>
                <option value="JP">Japan</option>
                <option value="US">United States</option>
              </SelectForm>
            </ItemForm>

            <ItemForm>
              Avatar <br />
              <InputForm
                type="select"
                style={{ color: "rgba(17, 24, 39, 1)" }}
              />
            </ItemForm>

            <ButtonContainer>
              <Link to="/">
                <ButtonForm style={{ color: "rgba(17, 24, 39, 1)" }}>
                  Cancel
                </ButtonForm>
              </Link>
              <ButtonForm style={{ backgroundColor: "#2563eb", color: "#fff" }}>
                Save
              </ButtonForm>
            </ButtonContainer>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default InvitePage;

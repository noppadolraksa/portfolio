import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CallIcon from "@mui/icons-material/Call";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "next-themes";
import Switch from "@mui/material/Switch";
import LanguageIcon from "@mui/icons-material/Language";
import { AddressText, SubTitleText } from "src/utils/text";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import BoltIcon from "@mui/icons-material/Bolt";
import CakeIcon from "@mui/icons-material/Cake";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { UserProps } from "src/types/userTypes";

const NavbarContainer = styled.nav`
  margin-bottom: 20px;
  background-color: var(--bg);
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const PictureContainer = styled.div`
  background-color: var(--primary);
  margin: 0;
  width: 80%;
  height: 235px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 20px;
`;

const ProfileWrapper = styled.img`
  object-fit: cover;
  width: 180px;
  height: 180px;

  background-color: var(--bg);
  border-radius: 50%;
  z-index: 2;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  position: relative;
`;

const ThemeSwitch = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.h1`
  font-size: var(--xxlFont);
  color: var(--primaryFont);
  font-weight: 500;
  line-height: 50px;
  margin: 40px 0px 0px;
`;

const Position = styled.h4`
  font-size: var(--lFont);
  color: var(--primaryFont);
  margin: 0;
  font-weight: 300;
  line-height: 30px;
`;

const PersonalDetail = styled.div`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const PersonalDetailItem = styled.div`
  width: 50%;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const AddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  height: 50px;
  background-color: var(--primary);
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-right: 10px;
  padding-left: 5px;
`;

const PersonalInfo = styled.div``;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const Navbar = ({ user }: UserProps) => {
  const { theme, setTheme } = useTheme();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark === true) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [dark, setTheme]);

  return (
    <NavbarContainer>
      <Left>
        <PictureContainer/>
      </Left>
      <Right>
        <ThemeSwitch>
          <SubTitleText
            style={{ padding: 0, display: "flex", alignContent: "center" }}
          >
            {dark ? (
              <DarkModeIcon />
            ) : (
              <Brightness7Icon style={{ color: "#444" }} />
            )}
          </SubTitleText>
          <Switch checked={dark} onClick={() => setDark(!dark)} />
        </ThemeSwitch>
        <RightContainer>
          <PersonalInfo>
            <Name>{user?.name}</Name>
            <Position> {user?.tagline}</Position>
            <PersonalDetail>
              <PersonalDetailItem>
                <BoltIcon />
                <SubTitleText>strength: {user?.strength}</SubTitleText>
              </PersonalDetailItem>
              <PersonalDetailItem>
                <CakeIcon />
                <SubTitleText> {user?.born}</SubTitleText>
              </PersonalDetailItem>
              <PersonalDetailItem>
                <LocationOnIcon />
                <SubTitleText> Bangkae, {user?.location}</SubTitleText>
              </PersonalDetailItem>
              <PersonalDetailItem>
                <LinkedInIcon />
                <SubTitleText> {user?.website}</SubTitleText>
              </PersonalDetailItem>
            </PersonalDetail>
          </PersonalInfo>
          <AddressContainer>
            <Address>
              <CallIcon style={{ color: "#eee" }} />
              <AddressText>{user?.phone}</AddressText>
            </Address>
            <Address>
              <LanguageIcon style={{ color: "#eee" }} />
              <AddressText>{user?.github}</AddressText>
            </Address>
            <Address>
              <EmailIcon style={{ color: "#eee" }} />
              <AddressText>{user?.email}</AddressText>
            </Address>
          </AddressContainer>
        </RightContainer>
      </Right>
    </NavbarContainer>
  );
};

export default Navbar;

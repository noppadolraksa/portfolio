import React from "react";
import styled from "styled-components";
import { PersonalitiesText, SubTitleText, TitleText } from "src/utils/text";
import { UserProps } from "src/types/userTypes

const Container = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Wrapper = styled.div`
  margin: 0;
  width: 80%;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SkillContainer = styled.div``;

const List = styled.ul`
  margin: 10px 0px 10px 0px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  margin: 3px 0px 3px 0px;
  width: 50%;
  white-space: nowrap;
  overflow: hidden;
`;
const SkillItem = styled.li`
  margin: 3px 0px 3px 0px;

  white-space: nowrap;
  overflow: hidden;
`;
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PersonalitiesContainer = styled.div`
  display: flex;
  gap: 2px;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const Sidebar = ({ user }: UserProps) => {
  const { reading, writing, listening, speaking, personalities } = user.skill;

  return (
    <Container>
      <Wrapper>
        <SkillContainer>
          <TitleText>{"FRONTEND".toUpperCase()}</TitleText>
          <List>
            {user?.frontEndSkills
              .filter((item) => item !== "Styled-component")
              .map((skill, index) => (
                <ListItem key={index}>
                  <SubTitleText>{skill}</SubTitleText>
                </ListItem>
              ))}

            <SubTitleText style={{ margin: "3px 0px 3px 0px" }}>
              {user?.frontEndSkills.filter(
                (item) => item === "Styled-component"
              )}
            </SubTitleText>
          </List>
        </SkillContainer>
        <SkillContainer>
          <TitleText>{"BACKEND".toUpperCase()}</TitleText>
          <List>
            {user?.backEndSkills
              .filter((item) => item !== "Authentication & Authorization")
              .map((skill, index) => (
                <ListItem key={index}>
                  <SubTitleText>{skill}</SubTitleText>
                </ListItem>
              ))}

            <SubTitleText style={{ margin: "3px 0px 3px 0px" }}>
              {user?.backEndSkills.filter(
                (item) => item === "Authentication & Authorization"
              )}
            </SubTitleText>
          </List>
        </SkillContainer>
        <SkillContainer>
          <TitleText>{"infrastructure".toUpperCase()}</TitleText>
          <List>
            {user?.infrastructures.map((skill, index) => (
              <ListItem key={index}>
                <SubTitleText>{skill}</SubTitleText>
              </ListItem>
            ))}
          </List>
        </SkillContainer>
        <SkillContainer>
          <TitleText>{"skills".toUpperCase()}</TitleText>
          <List>
            <SkillItem>
              <SubTitleText>
                <span style={{ fontWeight: "400" }}>Thai:</span> Native
              </SubTitleText>
              <SubTitleText>
                <span style={{ fontWeight: "400" }}>English:</span> Intermediate
              </SubTitleText>

              
              <PersonalitiesContainer>
                {personalities?.map((personality, index) => (
                  <PersonalitiesText key={index}>
                    {personality}
                  </PersonalitiesText>
                ))}
              </PersonalitiesContainer>
            </SkillItem>
          </List>
        </SkillContainer>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;

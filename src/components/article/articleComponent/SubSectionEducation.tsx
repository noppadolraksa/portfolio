import React from "react";
import styled from "styled-components";
import { SubTitleText } from "src/utils/text";
import { Education } from "src/types/userTypes";

type EducationProps = {
  education: Education[];
};

const Container = styled.div``;

const Topic = styled.div`
  width: full;
  display: flex;
`;

const Left = styled.div`
  width: 20%;
`;

const Right = styled.div`
  width: 80%;
  border-left: 3px solid var(--secondaryFont);
  padding-left: 10px;
  position: relative;
  &:before {
    position: absolute;
    top: 4px;
    left: -7px;
    width: 11px;
    height: 12px;
    border-radius: 5px;
    background: var(--secondaryFont);
    content: "";
  }
`;

const List = styled.div``;

const ListItem = styled.div``;

const EducationContainer = styled.div`
  width: full;
`;

const SubSectionEducation = ({ education }: EducationProps) => {
  return (
    <div>
      <EducationContainer>
        <Container>
          {education?.map((list) => (
            <Topic key={list.id}>
              <Left>
                {/* <SubTitleText>{list.date}</SubTitleText> */}
                <SubTitleText style={{ fontWeight: 400 }}>
                  {list.date}
                </SubTitleText>
              </Left>
              <Right>
                <List>
                  <ListItem>
                    <SubTitleText style={{ fontWeight: 500 }}>
                      {list.degree}
                    </SubTitleText>
                  </ListItem>
                  <ListItem>
                    <SubTitleText>{list.institution}</SubTitleText>
                  </ListItem>
                  <ListItem>
                    <SubTitleText>{list.fieldOfStudy}</SubTitleText>
                  </ListItem>
                </List>
              </Right>
            </Topic>
          ))}
        </Container>
      </EducationContainer>
    </div>
  );
};

export default SubSectionEducation;

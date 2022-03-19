import styled from "@emotion/styled";

import React from "react";
import { SubTitleText, TitleText } from "src/utils/text";

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const DescContainer = styled.div`
  width: 80%;
  width: full;
  padding-left: 10px;
`;

const TitleTextContainer = styled.div`
  /* margin: 0px 10px 0px 0px; */
  width: 20%;
  padding: 0;
`;

type ObjectiveType = {
  objective: string;
};

const Objective = ({ objective }: ObjectiveType) => {
  return (
    <SectionContainer>
      <TitleTextContainer>
        <TitleText>{"objective".toUpperCase()} </TitleText>
      </TitleTextContainer>
      <DescContainer>
        <SubTitleText>{objective}</SubTitleText>
      </DescContainer>
    </SectionContainer>
  );
};

export default Objective;

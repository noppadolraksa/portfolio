import React from "react";
import { TitleText } from "src/utils/text";
import styled from "@emotion/styled";

const TitleContainer = styled.div`
  flex: 1;
  margin: 0px 10px 10px 0px;
  padding: 0;
`;

type TitleType = {
  title: string;
};

const TitleSection = ({ title }: TitleType) => {
  return (
    <div>
      <TitleContainer>
        <TitleText>{title.toUpperCase()} </TitleText>
      </TitleContainer>
    </div>
  );
};

export default TitleSection;

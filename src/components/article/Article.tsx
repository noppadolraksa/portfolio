import React from "react";
import styled from "@emotion/styled";
import Objective from "./articleComponent/Objective";

import SectionEducation from "./articleComponent/SectionEducation";
import SectionProject from "./articleComponent/SectionProject";
import { UserProps } from "src/context/UserContext";

const Container = styled.article`
  flex: 2;

  padding-right: 20px;
  padding-left: 11.5px;
`;

const Article = ({ user }: UserProps) => {
  return (
    <Container>
      <Objective />
      <SectionEducation education={user?.education} />
      <SectionProject project={user?.project} />
      {/* <Section title="Experience" education={user?.education}/> */}
    </Container>
  );
};

export default Article;

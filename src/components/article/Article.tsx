import React from "react";
import styled from "styled-components";
import Objective from "./articleComponent/Objective";
import SectionEducation from "./articleComponent/SectionEducation";
import SectionProject from "./articleComponent/SectionProject";
import { UserProps } from "src/types/userTypes";

const Container = styled.article`
  width: 67%;
  padding-right: 20px;
  padding-left: 11.5px;
`;

const Article = ({ user }: UserProps) => {
  return (
    <Container>
      <Objective objective={user.objective} />
      <SectionEducation education={user?.education} />
      <SectionProject project={user?.project} />
    </Container>
  );
};

export default Article;

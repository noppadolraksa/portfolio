import React from "react";
import styled from "@emotion/styled";
import TitleSection from "./TitleSection";
import SubSectionProject from "./SubSectionProject";
import { Project } from "src/types/userTypes";

const SectionContainer = styled.div`
  margin-bottom: 20px;
`;

const Div = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

type ProjectType = {
  project: Project[];
};

const SectionProject = ({ project }: ProjectType) => {
  return (
    <SectionContainer>
      <Div>
        <TitleSection title={"Project"} />
      </Div>
      <Div>
        <SubSectionProject project={project} />
      </Div>
    </SectionContainer>
  );
};

export default SectionProject;

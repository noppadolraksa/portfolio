import React from "react";
import styled from "@emotion/styled";

export const AddressText = styled.p`
  color: var(--secondaryFont);
  font-size: 12px;
`;

export const PlainText = styled.div`
  font-size: var(--mFont);
  color: var(--primaryFont);
`;

export const TitleText = styled.h2`
  font-size: var(--lFont);
  color: var(--primaryFont);
  margin: 0;
  font-weight: 400;
`;

export const SubTitleText = styled.p`
  font-size: var(--sFont);
  color: var(--primaryFont);
  font-weight: 300;

  /* padding: 0px 4px 4px 0px; */
  line-height: 23px;
  margin: 0px;

  /* color: var(--secondary);
  text-shadow: 0 0 10px var(--third); */
`;

export const PersonalitiesText = styled.p`
  font-size: var(--mFont);
  color: var(--primaryFont);
  background-color: var(--third);

  padding: 2px;
  border-radius: 5px;
  margin: 2px;
`;

import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 430px) {
      ${props}
    }
  `;
};

export const mobileMini = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 780px) {
      ${props}
    }
  `;
};

export const notebook = (props) => {
  return css`
    @media only screen and (max-width: 960px) {
      ${props}
    }
  `;
};

export const a4 = (props) => {
  return css`
    @media only screen and (max-width: 800px) and (mag-height: 1123px) {
      ${props}
    }
  `;
};

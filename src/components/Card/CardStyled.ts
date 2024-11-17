import styled from "styled-components";

export const CardCon = styled.div`
  padding-left: 24px;
  padding-top: 24px;
  padding-right: 24px;
  padding-bottom: 24px;

  text-align: left;

  background-color: #15263f;

  border-radius: 15px;
`;

export const HeroImgCon = styled.div`
  margin-bottom: 24px;

  border-radius: 8px;
  overflow: hidden;

  & > img {
    width: 278px;
    height: 278px;
  }
`;

export const CardTitle = styled.h3`
  margin-bottom: 12px;

  font-size: 22px;
  font-weight: 700;

  color: #fff;
`;

export const CardContent = styled.p`
  margin-bottom: 16px;

  color: #8bacd9;
`;

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

  font-size: 18px;
  line-height: 1.44;

  color: #8bacd9;
`;

export const InfoCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 16px;

  border-bottom: 1px solid #2e405a;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & img {
    margin-right: 7px;
  }
`;

export const Ethereum = styled.p`
  font-size: 15px;
  font-weight: 700;

  color: #00fff8;
`;

export const TimeTerm = styled.p`
  font-size: 15px;
  font-weight: 400;

  color: #8bacd9;
`;

export const AuthorCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-top: 16px;

  color: #8bacd9;
  font-size: 15px;

  & > img {
    width: 33px;
    height: 33px;

    margin-right: 16px;
  }

  & span{
    color: #fff;
  }
`;

import React from "react";
import { Link as Link_ } from "gatsby";
import styled from "@emotion/styled";
import ChillGuy from "../images/chill-guy.png";

const ProfileCardContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 52px;
`;

const ProfileImage = styled.div`
  flex-shrink: 0; 
  width: 75px;
  height: 75px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 5px;
`;

const Name = styled(Link_)`
  display: inline-flex;
  width: fit-content;
  border-radius: 8px;
  padding: 3px 6px;
  background-color: #baefb4;

  text-decoration: none;
  color: black;
  font-size: 1rem;
  font-weight: 700;
`;

const Description = styled.div`
  font-size: 0.75rem;
  color: #949494;
  font-weight: 400px;
`;

const Links = styled.div`
  display: flex;
  gap: 5px;

  a {
    text-decoration: none;
    font-size: 0.8rem;
    color: #35ba09;
    font-weight: 600;
  }
`;

const Link = styled(Link_)`
  text-decoration: none;
  font-size: 0.8rem;
  color: #35ba09;
  font-weight: 600;
`;

const ProfileCard = () => {
  return (
    <ProfileCardContainer>
      <ProfileImage>
        <img src={ChillGuy} alt="Profile Image" />
      </ProfileImage>
      <Info>
        <Name to="/about">@김태성</Name>
        <Description>
          사용자 경험을 최우선으로 생각하는 3년차 프론트엔드 개발자입니다.
          효율적인 코드 작성과 유지보수를 위해 항상 노력합니다.
        </Description>
        <Links>
          <Link to="/about">About</Link>
          <a
            href="https://github.com/flip-404"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </Links>
      </Info>
    </ProfileCardContainer>
  );
};

export default ProfileCard;

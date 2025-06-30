import styled from "@emotion/styled";

export const PostDetails = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid #d0d0d0;


  @media (max-width: 780px) {
    padding: 0 24px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const CreatedAt = styled.p`
  font-size: 1rem;
  color: #999;
  margin-right: 8px;
`;

export const Tags = styled.div`
  margin-bottom: 16px;
`;

export const Tag = styled.span`
  padding: 4px 8px;
  border-radius: 16px;
  background-color: #c3eeb5;
  margin-right: 6px;
  font-size: 0.9rem;
`;

export const Content = styled.div`
  box-sizing: border-box;
  width: 100%;  
  padding-top: 24px;

  h1 {
    margin: 40px 0px 20px 0px;
  }

h2 {
    margin: 30px 0px 20px 0px;
  }

  pre {
    background: #d5ddef !important;
    border-radius: 5px;
    padding: 10px;
  }

  li {
    margin-top: 8px;
  }

  img {
    max-width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
    object-fit: cover;
  }

  hr {
    margin: 3rem 0;
  }

  aside {
    background-color: #f8f8f7;
    padding: 12px 20px 12px 12px;
    border-radius: 4px;
  }


  blockquote {
  position: relative;
  margin: 0;
  border-radius: 10px;
  padding: 20px 18px 20px 50px; /* 왼쪽 패딩을 늘려 아이콘 공간 확보 */
  font-size: 18px;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 7px 0px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    width: 21px;
    height: 21px;
    z-index: 1;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' height='20px' viewBox='0 0 24 24' width='20px' fill='%232db400'%3E%3Cg%3E%3Crect fill='none' height='24' width='24'/%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpolygon points='15,16 11,20 21,20 21,16'/%3E%3Cpath d='M12.06,7.19L3,16.25V20h3.75l9.06-9.06L12.06,7.19z M5.92,18H5v-0.92l7.06-7.06l0.92,0.92L5.92,18z'/%3E%3Cpath d='M18.71,8.04c0.39-0.39,0.39-1.02,0-1.41l-2.34-2.34C16.17,4.09,15.92,4,15.66,4c-0.25,0-0.51,0.1-0.7,0.29l-1.83,1.83 l3.75,3.75L18.71,8.04z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
  }

  p {
    margin: 0;
  }
}

  @media (max-width: 780px) {
    padding: 0 24px;
  }

`;

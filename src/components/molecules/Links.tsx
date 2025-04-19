import styled from "@emotion/styled";
import { Link } from "gatsby";

export const ExternalLink = ({
  href,
  children,
  onClick,
  props,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  props?: any;
}) => {
  return (
    <StyledAnchor
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledAnchor>
  );
};

export const InternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return <StyledLink to={href}>{children}</StyledLink>;
};

const StyledAnchor = styled.a`
  margin-left: 5px;
  color: #2db400;
  text-decoration: underline;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  margin-left: 5px;
  color: #2db400;
  text-decoration: underline;
  cursor: pointer;
`;

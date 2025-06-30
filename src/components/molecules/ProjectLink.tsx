import styled from '@emotion/styled';

export const LinkIcon = ({ fill }: { fill?: string }) => {
  return (
    <SvgWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill || '#434343'}>
        <path d="M0 0h24v24H0V0z" fill={fill || 'none'} />
        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
      </svg>
    </SvgWrapper>
  );
};

const SvgWrapper = styled.span`
  margin-left: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

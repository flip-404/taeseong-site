import { Icons } from '../../../../assets/Icons';
import { ExternalLink } from '../../../molecules/Links';
import { LinkIcon } from '../../../molecules/ProjectLink';
import {
  CodeBlock,
  Contribution,
  Description,
  Detail,
  Label,
  MyRole,
  ProjectContainer,
  Subtitle,
  TechStack,
} from './styles';

const CHEXCARHomePage = () => {
  return (
    <ProjectContainer>
      <Label className="hasLink" onClick={() => window.open('https://chexcar.co.kr/', '_blank')}>
        CHEXCAR 홈페이지 <LinkIcon />
        <Contribution>(기여도: 100%)</Contribution>
      </Label>
      <Detail>Frontend Engineer</Detail>
      <Detail>2025.03</Detail>
      <Description>
        체카 공식 홈페이지를 단독 개발하여 총 7개의 핵심 페이지 구축했습니다. 다양한 화면 크기에
        최적화된 반응형 디자인을 적용해 데스크탑부터 태블릿, 모바일까지 일관된 사용자 경험을
        제공했습니다. CI/CD 파이프라인을 구축하여 배포 자동화 시스템을 구현했습니다.
      </Description>
      <TechStack>
        <CodeBlock>Next</CodeBlock> <CodeBlock>Typescript</CodeBlock>
        <CodeBlock>emotion</CodeBlock> <CodeBlock>vanilla-extract</CodeBlock>
      </TechStack>
      <MyRole>
        <Subtitle>렌더링 사이클을 최적화하여 렌더링 호출 횟수를 100분의 1로 줄였습니다.</Subtitle>
        <ul className="innerList">
          <li>
            transform 속성 기반 GPU 가속 적용 및 스크롤 이벤트 처리 시 렌더링 호출이 95% 이상 감소{' '}
            <ExternalLink href="/detail/CHEXCAR_Homepage/detail_1">
              <Icons.Link />
            </ExternalLink>
          </li>
          <li>
            Lighthouse 기준의 웹 성능 92으로 점수 기록
            <ExternalLink href="/detail/CHEXCAR_Homepage/detail_2">
              <Icons.Link />
            </ExternalLink>
          </li>
        </ul>
      </MyRole>
    </ProjectContainer>
  );
};

export default CHEXCARHomePage;

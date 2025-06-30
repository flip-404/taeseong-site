import BasicInformation from '../../components/about/BasicInformation';
import Experience from '../../components/about/Experience';
import Introduction from '../../components/about/Introduction';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';
import SEO from '../../components/SEO';

const AboutPage = () => {
  return (
    <>
      <SEO
        title="Taeseong Dev Blog | Resume"
        description="프론트엔드 개발자 김태성의 이력서, 경력 및 자기소개를 담은 페이지입니다."
        pathname="/about"
      />
      <Helmet>
        <title>Taeseong Dev Blog | Resume</title>
      </Helmet>
      <Layout>
        <BasicInformation />
        <Introduction />
        <Experience />
      </Layout>
    </>
  );
};

export default AboutPage;

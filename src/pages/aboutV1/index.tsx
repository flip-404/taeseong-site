import BasicInformation from '../../components/aboutV1/BasicInformation';
import Experience from '../../components/aboutV1/Experience';
import Introduction from '../../components/aboutV1/Introduction';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';
import SEO from '../../components/SEO';
import Service from '../../components/aboutV1/Service';

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
        <Service />
        <Experience />
      </Layout>
    </>
  );
};

export default AboutPage;

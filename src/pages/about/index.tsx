import BasicInformation from "../../components/about/BasicInformation";
import Experience from "../../components/about/Experience";
import Introduction from "../../components/about/Introduction";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <>
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

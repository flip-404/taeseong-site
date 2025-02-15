import BasicInformation from "../../components/about/BasicInformation";
import Experience from "../../components/about/Experience";
import Introduction from "../../components/about/Introduction";
import Layout from "../../components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <BasicInformation />
      <Introduction />
      <Experience />
    </Layout>
  );
};

export default AboutPage;

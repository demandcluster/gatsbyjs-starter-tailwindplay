import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
    
      <SEO
        title="DemandCluster | Next-Level eCommerce Solutions"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

    </Layout>
  );
}

export default IndexPage;

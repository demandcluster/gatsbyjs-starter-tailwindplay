import React from "react";

import Invest from "../components/invest";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Invest>
    
      <SEO
        title="Board now for the Demandcluster launch!"
        keywords={[`ecommerce`, `mailchimp open commerce`, `shop`, `channels`]}
        description={`Your chance to invest in innovation`}
      />

    </Invest>
  );
}

export default IndexPage;

import React from "react";
import MerchantHero from "../../components/merchant/MerchantHero";
import MerchantBenefits from "../../components/merchant/MerchantBenefits";
import BulkBundles from "../../components/merchant/BulkBundles";
import MerchantSteps from "../../components/merchant/MerchantSteps";
import MerchantCTA from "../../components/merchant/MerchantCTA";

export const metadata = {
  title: "Merchant Center | Join Jolli by iZone",
  description:
    "Partner with Jolli by iZone to distribution your digital products to millions of subscribers. Integrated payments, marketing support, and seamless scaling.",
};

const MerchantPage = () => {
  return (
    <main>
      <MerchantHero />
      <MerchantBenefits />
      <BulkBundles />
      <MerchantSteps />
      <MerchantCTA />
    </main>
  );
};

export default MerchantPage;

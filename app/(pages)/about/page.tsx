import AboutHero from "../../components/about/AboutHero";
import CompanyIntro from "../../components/about/CompanyIntro";
import MarketOpportunity from "../../components/about/MarketOpportunity";
import JolliProduct from "../../components/about/JolliProduct";
import BundlesShowcase from "../../components/about/BundlesShowcase";
import ValueProps from "../../components/about/ValueProps";
import PartnershipSection from "../../components/about/PartnershipSection";
import ContactCTA from "../../components/about/ContactCTA";

export const metadata = {
  title: "About Us | Jolli by iZone",
  description:
    "Learn about iZone Limited, Ghana's leading technology distribution company. Discover our mission to democratize digital access through Jolli bundles powered by iZone.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <AboutHero />

      {/* Company Introduction */}
      <CompanyIntro />

      {/* Market Opportunity */}
      <MarketOpportunity />

      {/* Jolli Product Explanation */}
      <JolliProduct />

      {/* Bundles Showcase */}
      <BundlesShowcase />

      {/* Value Propositions */}
      <ValueProps />

      {/* Partnership Model */}
      <PartnershipSection />

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
}

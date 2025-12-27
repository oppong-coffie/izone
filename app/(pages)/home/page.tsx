import HeroSection from "../../components/home/HeroSection";
import BundleGrid from "../../components/home/BundleGrid";
import Statistics from "../../components/home/Statistics";
import ValueProposition from "../../components/home/ValueProposition";
import Partnership from "../../components/home/Partnership";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Statistics />
      <BundleGrid />
      <ValueProposition />
      <Partnership />
    </>
  );
}

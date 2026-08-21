import { Hero } from "@/components/home/Hero";
import { CompanyStatement } from "@/components/home/CompanyStatement";
import { Stats } from "@/components/home/Stats";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { Industries } from "@/components/home/Industries";
import { BlueFeature } from "@/components/home/BlueFeature";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ProcessPreview } from "@/components/home/ProcessPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyStatement />
      <Stats />
      <ServicesShowcase />
      <Industries />
      <BlueFeature />
      <FeaturedProjects />
      <ProcessPreview />
    </>
  );
}

import Hero from "@/parts/main/Hero";
import HostingServices from "@/parts/components/HostingServices";
import Features from "@/parts/components/Features";
import Testimonial from "@/parts/components/Testimonial";
import ActionCardHostingVps from "@/parts/components/ActionCardHostingVps";
import KiyoToolsTeaser from "@/parts/components/KiyoToolsTeaser";

export const metadata = {
  title: "Hosting and Domains, Made Simple",
  description: "Your website, domain, and hosting in one simple home. Start with Kiyo Cloud today.",
};

export default function Home() {
  return (
    <main className="main main-home">
      <Hero />
      <section className="content content-home">
        <div className="container">
          <div className="content-container">
            <HostingServices />
            <Features />
            <Testimonial />
            <KiyoToolsTeaser />
            <ActionCardHostingVps />
            <div className="spacer-3"></div>
          </div>
        </div>
      </section>
    </main>
  );
}

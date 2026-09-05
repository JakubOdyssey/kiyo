import Breadcrumb from "@/parts/components/Breadcrumb";
import FaqHosting from "@/parts/components/FaqHosting";
import HostingPlans from "@/parts/plans/HostingPlans";

export const metadata = {
  title: "Hosting Plans",
  description: "Simple Kiyo Cloud hosting plans for personal websites and growing businesses.",
  alternates: { canonical: "/hosting-plans" },
};

export default function HostingPlansPage() {
  return (
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Simple plans. No technical maze.</h1>
              <p className="width-6 font-size-medium">Everything your website needs, with clear pricing and room to grow.</p>
            </div>
          </div>
        </header>
        <section className="content">
          <div className="container">
            <div className="content-container">
              <HostingPlans />
              <FaqHosting />
              <div className="spacer-3" />
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

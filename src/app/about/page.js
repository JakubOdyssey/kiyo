import Breadcrumb from "@/parts/components/Breadcrumb";
import ActionCardHosting from "@/parts/components/ActionCardHostingVps";
import Testimonial from "@/parts/components/Testimonial";
export const metadata = {
  title: "About Kiyo Cloud",
  description: "Meet Kiyo Cloud: simple, reliable hosting and domains for people who would rather focus on their website.",
};

export default function About() {
  return (
    <main className="main main-about">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">About Us</h1>
            </div>
          </div>
        </header>
        <section className="content content-about">
          <div className="container">
            <div className="content-container about-content-container">
              <section className="section section-about">
                <h2 className="section-title">About Kiyo Cloud</h2>
                <div className="section-small">
                  <p className="font-size-medium color-white">Hosting and domains, made simple.</p>
                </div>
                <p>Kiyo Cloud is built around a simple idea: getting a website online should feel clear, calm, and manageable. We bring hosting and domains together, then remove the complexity that gets in the way.</p>
                <p>Whether it is your first website or the next step for your business, Kiyo gives it a dependable place to run.</p>
              </section>
              <section className="section section-about">
                <h2 className="section-title">Our Mission</h2>
                <div className="section-small">
                  <p className="font-size-medium color-white">Make the essential things feel effortless.</p>
                </div>
                <p>Our goal is to make high-quality hosting easy to understand and easy to use. You should be able to choose a domain, launch your website, and manage both without learning a new technical language.</p>
              </section>
              <section className="section section-about">
                <h2 className="section-title">Our Vision</h2>
                <div className="section-small">
                  <p className="font-size-medium color-white">A quieter, better way to run a website.</p>
                </div>
                <p>Kiyo Cloud is focused on doing a few things exceptionally well: web hosting, domains, and domain transfers.</p>
                <p>Our vision is a platform people trust because it stays simple, works reliably, and offers help in plain English.</p>
              </section>
              <Testimonial />
              <ActionCardHosting />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

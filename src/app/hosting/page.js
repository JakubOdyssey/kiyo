import Breadcrumb from "@/parts/components/Breadcrumb";
import FeaturesHosting from "@/parts/components/FeaturesHosting";
import ActionCardHosting from "@/parts/components/ActionCardHosting";
import HostingProductDetails from "@/parts/hosting/HostingProductDetails";
import Link from "next/link";

export const metadata = {
  title: "Web Hosting",
  description: "Fast, secure hosting without the technical mess. Simple web hosting from Kiyo Cloud.",
  alternates: { canonical: "/hosting" },
};

export default function Hosting() {
  return (
    <main className="main main-hosting">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Hosting that just works.</h1>
              <p className="width-6 font-size-medium">Fast, secure hosting without the technical mess.</p>
              <div className="hosting-hero-actions flex-container gap">
                <Link className="button" href="/hosting-plans">View hosting plans</Link>
                <Link className="button" href="/contact">Move an existing website</Link>
              </div>
            </div>
          </div>
        </header>
        <section className="content">
          <div className="container">
            <div className="content-container">
              <FeaturesHosting />
              <HostingProductDetails />
              <ActionCardHosting />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

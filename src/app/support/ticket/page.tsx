import Breadcrumb from "@/parts/components/Breadcrumb";
import SupportRequestForm from "@/parts/support/SupportRequestForm";

export const metadata = {
  title: "Contact Kiyo Support",
  description: "Send a support request to Kiyo Cloud. No account is required.",
  alternates: { canonical: "/support/ticket" },
};

export default async function SupportTicketPage({ searchParams }: { searchParams: Promise<{ category?: string | string[] }> }) {
  const query = await searchParams;
  const category = typeof query.category === "string" ? query.category : "";
  return (
    <main className="main support-subpage">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <p className="domain-search-kicker">Kiyo Support</p>
              <h1 className="page-title">How can we help?</h1>
              <p className="width-6 font-size-medium">
                Send us the details and a real member of Kiyo Support will follow up by email. No Kiyo account is required.
              </p>
            </div>
          </div>
        </header>

        <section className="content">
          <div className="container">
            <div className="content-container">
              <SupportRequestForm defaultCategory={category} />
              <div className="spacer-3" />
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

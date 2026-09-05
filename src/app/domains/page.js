import Breadcrumb from '@/parts/components/Breadcrumb';
import FaqDomains from '@/parts/components/FaqDomains';
import ActionCardHosting from '@/parts/components/ActionCardHostingVps';
import DomainSearch from '@/parts/domains/DomainSearch';

export const metadata = {
  title: 'Domains',
  description: 'Find and manage your domain with Kiyo Cloud. Clear pricing and simple setup, all alongside your hosting.',
};

export default function Domains() {
  return (
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Find your domain.</h1>
              <p className="width-6 font-size-medium">Find the right name for your business.</p>
              <ul className="width-5 flex-container gap-2 list-check">
                <li>Clear Pricing</li>
                <li>Easy Management</li>
                <li>Helpful Support</li>
                <li>Simple DNS</li>
                <li>Privacy Protection</li>
                <li>Hosting Ready</li>
              </ul>
            </div>
          </div>
        </header>
        <section className="content">
          <div className="container">
            <div className="content-container">
              <DomainSearch />
              <FaqDomains />
              <ActionCardHosting />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

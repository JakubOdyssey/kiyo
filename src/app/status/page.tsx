import Breadcrumb from "@/parts/components/Breadcrumb";

const services = ["Hosting", "Domains", "Support"];

export const metadata = { title: "Service Status", description: "Current basic status of Kiyo Cloud services.", alternates: { canonical: "/status" } };

export default function StatusPage() {
  return <main className="main support-subpage"><article><header className="page-header"><div className="container"><div className="page-header-container"><Breadcrumb /><h1 className="page-title">Service Status</h1><p className="width-6 font-size-medium">A clear view of Kiyo services and active incidents.</p></div></div></header><section className="content"><div className="container"><div className="content-container"><section className="section service-status" aria-labelledby="service-status-title"><p className="domain-search-kicker">Basic current status</p><div className="service-status-summary"><div><h2 id="service-status-title" className="section-title">All systems operational</h2><p>No active incidents are currently reported.</p></div><span>Operational</span></div><div className="service-status-list">{services.map((service) => <div key={service}><strong>{service}</strong><span><i aria-hidden="true" />Operational</span></div>)}</div><p className="service-status-note">This is a basic current-status view. Live monitoring and incident history will be connected later.</p></section><div className="spacer-3" /></div></div></section></article></main>;
}

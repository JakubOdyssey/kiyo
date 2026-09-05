import { HostingServicesData } from "@/data/components/HostingServicesData";
import Image from "next/image";
import Link from "next/link";

export default function HostingServices() {
  return (
    <section className="section section-services">
      <h2 className="section-title">One simple home for your website</h2>
      <div className="section-small">
        <p className="font-size-medium width-6">Start a new site, choose the right domain, or bring an existing one over. Kiyo keeps every step clear.</p>
      </div>
      <div className="cards cards-services">
        {HostingServicesData.map((service) => (
          <div className="card card-services card-border" key={service.id}>
            <div className="card-icon">
              <Image className="image-size-x3" src={service.image} alt={service.name} width={48} height={48} />
            </div>
            <h3 className="card-title">{service.name}</h3>
            <p>{service.info}</p>
            <Link className="button card-button" href={service.url}>{service.buttonText}</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

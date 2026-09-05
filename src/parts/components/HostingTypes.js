import { HostingTypesData } from "@/data/components/HostingTypesData";
import Image from "next/image";
import Link from "next/link";

export default function HostingTypes() {
  return (
    <section className="section section-hosting-types">
      <h2 className="section-title">Everything your website needs</h2>
      <div className="section-small">
        <p className="font-size-medium width-5">Hosting and domains together, kept refreshingly simple.</p>
      </div>
      <div className="cards cards-hosting-types">
        {HostingTypesData.map((hostingtype) => (
          <div key={hostingtype.id} className="card card-hosting-type">
            <div className="card-icon">
              <Image className="image-size-x3" src={hostingtype.image} alt={hostingtype.title} width={48} height={48} />
            </div>
            <h3 className="card-title">{hostingtype.title}</h3>
            <p>{hostingtype.intro}</p>
            <Link className="button" href={hostingtype.url}>View Plans</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

import { FeaturesHostingData } from "@/data/components/FeaturesHostingData";
import Image from "next/image";

export default function FeaturesHosting() {
  return (
    <section className="section section-features">
      <h2 className="section-title">Everything essential, handled.</h2>
      <div className="section-small">
        <p className="font-size-medium width-5">Kiyo Cloud keeps your website fast, protected, and easy to manage.</p>
      </div>
      <div className="cards cards-feature">
        {FeaturesHostingData.map((item) => <div key={item.id} className="card card-feature">
          <div className="card-icon">
            <Image className="image-size-x3" src={item.image} alt={item.title} width={48} height={48} />
          </div>
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.text}</p>
        </div>)}
      </div>
    </section>
  )
}

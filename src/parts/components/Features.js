import { FeaturesData } from "@/data/components/FeaturesData";
import Image from "next/image";

export default function Features() {
  return (
    <section className="section section-features">
      <h2 className="section-title">Why choose Kiyo Cloud</h2>
      <div className="section-small">
        <p className="font-size-medium width-5">Reliable essentials, thoughtful support, and a platform that stays out of your way.</p>
      </div>
      <div className="cards cards-feature">
        {FeaturesData.map((item) => <div key={item.id} className="card card-feature">
          <div className="card-icon"><Image className="image-size-x3" src={item.image} alt="" width={48} height={48} /></div>
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.text}</p>
        </div>)}
      </div>
    </section>
  )
}

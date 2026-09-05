import { ContactCardsData } from "@/data/components/ContactCardsData";
import Image from "next/image";

export default function ContactCards() {
  return (
    <section className="section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="section-small">
        <p className="font-size-medium width-6">Need help? Reach out to our team to quickly get your questions answered.</p>
      </div>
      <div className="cards cards-contact">
        {ContactCardsData.map((item) => (
          <div className="card card-border" key={item.id}>
            <div className="card-icon">
              <Image className="image-size-x3" src={item.icon} alt={item.title} width={48} height={48} />
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
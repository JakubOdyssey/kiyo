import { TestimonialsData } from "@/data/components/TestimonialsData";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="section section-testimonials" aria-labelledby="testimonial-heading">
      <h2 id="testimonial-heading" className="section-title testimonials-title">Made for people with websites</h2>
      <div className="section-small">
        <p className="font-size-medium width-5">Simple to start, easy to manage, and dependable when it matters.</p>
      </div>
      <div className="testimonials section-marquee">
        <ul className="marquee-rtl gap-2">
          {TestimonialsData.map((testimonial) => (
            <li className="card card-testimonial marquee-item" key={testimonial.id}>
              <blockquote className="testimonial-message">
                <p>{testimonial.text}</p>
              </blockquote>
              <footer className="testimonial-footer">
                <div className="testimonial-image">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="testimonial-name">
                  <p><strong>{testimonial.name}</strong></p>
                  <p className="margin-0 font-size-small">{testimonial.title}</p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

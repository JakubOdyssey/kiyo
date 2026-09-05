import Image from "next/image";
import Link from "next/link";


export default function Hero() {
  return (
    <section className="section-hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-section hero-text">
            <h1 className="hero-title-wave">Hosting, without the headache.</h1>
            <p className="font-size-medium">Your website and domain, together in one simple, reliable home.</p>
            <div className="flex-container gap">
              <Link className="button" href="/hosting-plans">View Hosting Plans</Link>
              <Link className="button" href="/domains">Find Your Domain</Link>
            </div>
          </div>
          <div className="hero-section hero-image-section">
            <Image
              className="hero-image"
              src="/images/hero-server.svg"
              alt="Kiyo Cloud hosting platform"
              width={0}
              height={0}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

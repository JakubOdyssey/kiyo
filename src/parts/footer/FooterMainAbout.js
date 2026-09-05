import Image from "next/image";
export default function FooterMainAbout() {
  return (
    <div className="footer-block footer-main-block footer-about-block">
      <p><Image className="logo"
        src="/images/logo.svg"
        alt="Kiyo Cloud"
        height={36}
        width={0}
        priority
      /></p>
      <p>Kiyo Cloud brings your hosting and domains together in one clear, dependable place. Less complexity, more time for your website.</p>
    </div>
  );
}

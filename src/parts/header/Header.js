import HeaderNav from "@/parts/header/HeaderNav";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <div className="site-brand">
            <Link href="/">
              <Image className="logo"
                src="/images/logo.svg"
                alt="Kiyo Cloud"
                height={36}
                width={0}
                priority
              />
            </Link>
          </div>
          <div className="header-right">
            <HeaderNav />
            <div className="header-action view-in-desktop">
              <Link className="header-button" href="/login"><i className="icon-user"></i> Client Area</Link>
            </div>
            <div className="header-user-icon">
              <Link className="header-user-button" href="/login" aria-label="Client Area"><i className="icon-user"></i><span className="screen-reader-text">Client Area</span></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

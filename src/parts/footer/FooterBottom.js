import Copyright from "./Copyright";
import FooterBottomLinks from "./FooterBottomLinks";
import SocialLinks from "../components/SocialLinks";
export default function FooterBottom() {
  return(
    <div className="footer-bottom full-width">
      <div className="line-gradient"></div>
      <div className="container">
        <div className="footer-bottom-container">
          <Copyright />
          <FooterBottomLinks />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
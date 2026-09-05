import Link from "next/link";

export default function ActionCardHostingVps() {
  return (
    <div className="section section-action-card section-action-card-hosting">
      <div className="card-action card-action-hosting">
        <h2 className="section-title">Your website. One simple home.</h2>
        <p className="color-white font-size-medium">Choose your domain, add hosting, and get online with Kiyo Cloud.</p>
        <div className="flex-container gap">
          <Link className="button" href="/hosting/web-hosting">View Hosting Plans</Link>
          <Link className="button" href="/domains">Find Your Domain</Link>
        </div>
      </div>
    </div>
  );
}

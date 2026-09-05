import Link from "next/link";

export default function ActionCardHosting() {
  return (
    <div className="section section-action-card section-action-card-hosting">
      <div className="card-action card-action-hosting">
        <h2 className="section-title">Ready to give your website a home?</h2>
        <p className="color-white font-size-medium">Choose a simple plan today and move up whenever your website grows.</p>
        <div className="flex-container gap">
          <Link className="button" href="/hosting-plans">View Hosting Plans</Link>
          <Link className="button" href="/domains">Find a Domain</Link>
        </div>
      </div>
    </div>
  );
}

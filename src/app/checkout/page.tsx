import CheckoutSummary from "@/parts/domains/CheckoutSummary";

export const metadata = {
  title: "Order summary",
  description: "Review your saved Kiyo Cloud hosting or domain selection before the future payment step.",
};

export default function CheckoutPage() {
  return (
    <main className="main auth-handoff-page">
      <div className="container">
        <CheckoutSummary />
      </div>
    </main>
  );
}

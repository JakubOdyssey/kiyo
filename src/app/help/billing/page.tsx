import { billingArticles } from "@/data/help/billingArticles";
import { getHelpCategory } from "@/data/help/helpCenterData";
import HelpCategoryPage from "@/parts/help/HelpCategoryPage";

const category = getHelpCategory("billing")!;

export const metadata = {
  title: { absolute: "Billing | Kiyo Help" },
  description: category.description,
  alternates: { canonical: "https://kiyocloud.com/help/billing" },
};

export default function BillingHelpPage() {
  return <HelpCategoryPage category={category} articles={billingArticles} />;
}

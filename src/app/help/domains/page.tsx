import { domainArticles } from "@/data/help/domainArticles";
import { getHelpCategory } from "@/data/help/helpCenterData";
import HelpCategoryPage from "@/parts/help/HelpCategoryPage";

const category = getHelpCategory("domains")!;

export const metadata = {
  title: { absolute: "Domains | Kiyo Help" },
  description: category.description,
  alternates: { canonical: "https://kiyocloud.com/help/domains" },
};

export default function DomainsHelpPage() {
  return <HelpCategoryPage category={category} articles={domainArticles} />;
}

import { getHelpCategory } from "@/data/help/helpCenterData";
import { hostingArticles } from "@/data/help/hostingArticles";
import HelpCategoryPage from "@/parts/help/HelpCategoryPage";

const category = getHelpCategory("hosting")!;

export const metadata = {
  title: { absolute: "Hosting | Kiyo Help" },
  description: category.description,
  alternates: { canonical: "https://kiyocloud.com/help/hosting" },
};

export default function HostingHelpPage() {
  return <HelpCategoryPage category={category} articles={hostingArticles} />;
}

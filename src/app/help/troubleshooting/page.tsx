import { getHelpCategory } from "@/data/help/helpCenterData";
import { troubleshootingArticles } from "@/data/help/troubleshootingArticles";
import HelpCategoryPage from "@/parts/help/HelpCategoryPage";

const category = getHelpCategory("troubleshooting")!;

export const metadata = {
  title: { absolute: "Troubleshooting | Kiyo Help" },
  description: category.description,
  alternates: { canonical: "https://kiyocloud.com/help/troubleshooting" },
};

export default function TroubleshootingHelpPage() {
  return <HelpCategoryPage category={category} articles={troubleshootingArticles} />;
}

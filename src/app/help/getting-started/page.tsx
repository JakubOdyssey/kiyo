import { gettingStartedArticles, getHelpCategory } from "@/data/help/helpCenterData";
import HelpCategoryPage from "@/parts/help/HelpCategoryPage";

const category = getHelpCategory("getting-started")!;

export const metadata = {
  title: { absolute: "Getting Started | Kiyo Help" },
  description: category.description,
  alternates: { canonical: "https://kiyocloud.com/help/getting-started" },
};

export default function GettingStartedPage() {
  return <HelpCategoryPage category={category} articles={gettingStartedArticles} />;
}

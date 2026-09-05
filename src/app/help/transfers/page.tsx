import { getHelpCategory } from "@/data/help/helpCenterData";
import { transferArticles } from "@/data/help/transferArticles";
import HelpCategoryPage from "@/parts/help/HelpCategoryPage";

const category = getHelpCategory("transfers")!;

export const metadata = {
  title: { absolute: "Transfers | Kiyo Help" },
  description: category.description,
  alternates: { canonical: "https://kiyocloud.com/help/transfers" },
};

export default function TransfersHelpPage() {
  return <HelpCategoryPage category={category} articles={transferArticles} />;
}

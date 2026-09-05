import { accountSecurityArticles } from "@/data/help/accountSecurityArticles";
import { getHelpCategory } from "@/data/help/helpCenterData";
import HelpCategoryPage from "@/parts/help/HelpCategoryPage";

const category = getHelpCategory("account-security")!;

export const metadata = {
  title: { absolute: "Account & Security | Kiyo Help" },
  description: category.description,
  alternates: { canonical: "https://kiyocloud.com/help/account-security" },
};

export default function AccountSecurityHelpPage() {
  return <HelpCategoryPage category={category} articles={accountSecurityArticles} />;
}

import { notFound } from "next/navigation";
import { accountSecurityArticles } from "@/data/help/accountSecurityArticles";
import { getHelpArticle } from "@/data/help/helpCenterData";
import HelpArticlePage from "@/parts/help/HelpArticlePage";

type ArticleRouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return accountSecurityArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const article = getHelpArticle("account-security", slug);
  if (!article) return {};

  return {
    title: { absolute: `${article.title} | Kiyo Help` },
    description: article.description,
    alternates: { canonical: `https://kiyocloud.com/help/account-security/${article.slug}` },
  };
}

export default async function AccountSecurityArticleRoute({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const article = getHelpArticle("account-security", slug);
  if (!article) notFound();

  return <HelpArticlePage article={article} />;
}

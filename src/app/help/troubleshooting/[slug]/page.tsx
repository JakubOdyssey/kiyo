import { notFound } from "next/navigation";
import { getHelpArticle } from "@/data/help/helpCenterData";
import { troubleshootingArticles } from "@/data/help/troubleshootingArticles";
import HelpArticlePage from "@/parts/help/HelpArticlePage";

type ArticleRouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return troubleshootingArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const article = getHelpArticle("troubleshooting", slug);
  if (!article) return {};

  return {
    title: { absolute: `${article.title} | Kiyo Help` },
    description: article.description,
    alternates: { canonical: `https://kiyocloud.com/help/troubleshooting/${article.slug}` },
  };
}

export default async function TroubleshootingArticleRoute({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const article = getHelpArticle("troubleshooting", slug);
  if (!article) notFound();

  return <HelpArticlePage article={article} />;
}

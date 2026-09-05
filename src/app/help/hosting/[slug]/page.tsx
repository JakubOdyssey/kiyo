import { notFound } from "next/navigation";
import { getHelpArticle } from "@/data/help/helpCenterData";
import { hostingArticles } from "@/data/help/hostingArticles";
import HelpArticlePage from "@/parts/help/HelpArticlePage";

type ArticleRouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return hostingArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const article = getHelpArticle("hosting", slug);
  if (!article) return {};

  return {
    title: { absolute: `${article.title} | Kiyo Help` },
    description: article.description,
    alternates: { canonical: `https://kiyocloud.com/help/hosting/${article.slug}` },
  };
}

export default async function HostingArticleRoute({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const article = getHelpArticle("hosting", slug);
  if (!article) notFound();

  return <HelpArticlePage article={article} />;
}

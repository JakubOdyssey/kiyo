import { notFound } from "next/navigation";
import { gettingStartedArticles, getHelpArticle } from "@/data/help/helpCenterData";
import HelpArticlePage from "@/parts/help/HelpArticlePage";

type ArticleRouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return gettingStartedArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const article = getHelpArticle("getting-started", slug);

  if (!article) return {};

  return {
    title: { absolute: `${article.title} | Kiyo Help` },
    description: article.description,
    alternates: { canonical: `https://kiyocloud.com/help/getting-started/${article.slug}` },
  };
}

export default async function GettingStartedArticleRoute({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const article = getHelpArticle("getting-started", slug);

  if (!article) notFound();

  return <HelpArticlePage article={article} />;
}

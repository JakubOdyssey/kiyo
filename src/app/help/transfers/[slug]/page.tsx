import { notFound } from "next/navigation";
import { getHelpArticle } from "@/data/help/helpCenterData";
import { transferArticles } from "@/data/help/transferArticles";
import HelpArticlePage from "@/parts/help/HelpArticlePage";

type ArticleRouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return transferArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const article = getHelpArticle("transfers", slug);
  if (!article) return {};

  return {
    title: { absolute: `${article.title} | Kiyo Help` },
    description: article.description,
    alternates: { canonical: `https://kiyocloud.com/help/transfers/${article.slug}` },
  };
}

export default async function TransferArticleRoute({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const article = getHelpArticle("transfers", slug);
  if (!article) notFound();

  return <HelpArticlePage article={article} />;
}

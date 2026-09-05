import Link from "next/link";

type HelpBreadcrumbsProps = {
  categoryTitle: string;
  categorySlug: string;
  articleTitle?: string;
};

export default function HelpBreadcrumbs({ categoryTitle, categorySlug, articleTitle }: HelpBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb help-breadcrumbs">
      <ol className="breadcrumb-items">
        <li className="breadcrumb-item"><Link href="/help">Help</Link></li>
        <li className="breadcrumb-item"><span className="breadcrumb-separator">/</span>{articleTitle ? <Link href={`/help/${categorySlug}`}>{categoryTitle}</Link> : <span className="breadcrumb-active">{categoryTitle}</span>}</li>
        {articleTitle ? <li className="breadcrumb-item"><span className="breadcrumb-separator">/</span><span className="breadcrumb-active">{articleTitle}</span></li> : null}
      </ol>
    </nav>
  );
}

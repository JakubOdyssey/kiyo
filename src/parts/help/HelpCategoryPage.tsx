import Link from "next/link";
import type { HelpArticle, HelpCategory } from "@/data/help/types";
import HelpBreadcrumbs from "@/parts/help/HelpBreadcrumbs";

export default function HelpCategoryPage({ category, articles }: { category: HelpCategory; articles: readonly HelpArticle[] }) {
  return (
    <main className="main support-subpage">
      <article>
        <header className="page-header"><div className="container"><div className="page-header-container">
          <HelpBreadcrumbs categoryTitle={category.title} categorySlug={category.slug} />
          <h1 className="page-title">{category.title}</h1>
          <p className="width-6 font-size-medium">{category.description}</p>
        </div></div></header>
        <section className="content"><div className="container"><div className="content-container">
          <section className="section help-category-articles" aria-labelledby={`${category.slug}-articles-title`}>
            <p className="domain-search-kicker">Kiyo Help</p>
            <h2 id={`${category.slug}-articles-title`} className="section-title">{category.title} guides</h2>
            <div>{articles.map((article) => <Link key={article.slug} href={`/help/${article.category}/${article.slug}`}><span><strong>{article.title}</strong><small>{article.description}</small></span><span aria-hidden="true">→</span></Link>)}</div>
          </section>
          <div className="spacer-3" />
        </div></div></section>
      </article>
    </main>
  );
}

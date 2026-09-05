import Link from "next/link";
import type { HelpArticle } from "@/data/help/helpCenterData";
import { getArticleNavigation, getHelpArticle, getHelpCategory } from "@/data/help/helpCenterData";
import TawkSupportButton from "@/parts/domains/TawkSupportButton";
import HelpBreadcrumbs from "@/parts/help/HelpBreadcrumbs";

export default function HelpArticlePage({ article }: { article: HelpArticle }) {
  const navigation = getArticleNavigation(article.category, article.slug);
  const category = getHelpCategory(article.category)!;
  const related = article.relatedArticles.flatMap((slug) => {
    const relatedArticle = getHelpArticle(article.category, slug);
    return relatedArticle ? [relatedArticle] : [];
  });

  return (
    <main className="main help-article-page">
      <article>
        <header className="page-header help-article-header"><div className="container"><div className="page-header-container help-article-width">
          <HelpBreadcrumbs categoryTitle={category.title} categorySlug={category.slug} articleTitle={article.title} />
          <p className="domain-search-kicker">{category.title}</p>
          <h1 className="page-title">{article.title}</h1>
          <p className="font-size-medium">{article.description}</p>
        </div></div></header>

        <section className="content"><div className="container"><div className="content-container"><div className="help-article-width help-article-content">
          {article.sections.map((section) => (
            <section key={section.heading} className="help-article-section">
              {section.heading === "Introduction" ? null : <h2>{section.heading}</h2>}
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets ? <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
              {section.steps ? <ol>{section.steps.map((step) => <li key={step}>{step}</li>)}</ol> : null}
              {section.flow ? <div className="help-step-flow" aria-label={section.flow.join(" then ")}>{section.flow.map((step, index) => <span key={step}>{step}{index < section.flow!.length - 1 ? <i aria-hidden="true">→</i> : null}</span>)}</div> : null}
              {section.scoreExample ? <div className="help-score-example">
                <div className="help-score-total"><span>Website Score</span><strong>{section.scoreExample.score} <small>/ 100</small></strong></div>
                <div className="help-score-metrics">{section.scoreExample.metrics.map((metric) => <div key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong></div>)}</div>
                <div className="help-score-fixes"><strong>{section.scoreExample.recommendations.length} things worth fixing</strong><ol>{section.scoreExample.recommendations.map((item) => <li key={item}>{item}</li>)}</ol></div>
              </div> : null}
              {section.statusExample ? <div className="help-status-example"><div><span>{section.statusExample.title}</span><strong>{section.statusExample.status}</strong></div>{section.statusExample.rows.map((row) => <p key={row.label}><span>{row.label}</span><strong>{row.value}</strong></p>)}</div> : null}
              {section.callout ? <aside className="help-callout">{section.callout.title ? <strong>{section.callout.title}</strong> : null}<p>{section.callout.text}</p></aside> : null}
            </section>
          ))}

          <section className="help-related" aria-labelledby="related-articles-title">
            <p className="domain-search-kicker">Next step</p>
            <h2 id="related-articles-title">Related articles</h2>
            <ul>
              {related.map((item) => <li key={`${item.category}/${item.slug}`}><Link href={`/help/${item.category}/${item.slug}`}><span><strong>{item.title}</strong><small>{item.description}</small></span><span aria-hidden="true">→</span></Link></li>)}
              {article.relatedLinks?.map((item) => <li key={item.href}><Link href={item.href}><span><strong>{item.title}</strong><small>{item.description}</small></span><span aria-hidden="true">→</span></Link></li>)}
            </ul>
          </section>

          <nav className="help-article-navigation" aria-label="Article navigation">
            {navigation.previous ? <Link href={`/help/${navigation.previous.category}/${navigation.previous.slug}`}><small>Previous article</small><strong>{navigation.previous.title}</strong></Link> : <span />}
            {navigation.next ? <Link href={`/help/${navigation.next.category}/${navigation.next.slug}`}><small>Next article</small><strong>{navigation.next.title}</strong></Link> : <span />}
          </nav>

          <section className="help-support-prompt" aria-labelledby="help-support-title">
            <div><h2 id="help-support-title">Still need help?</h2><p>Talk to Kiyo now or open a ticket for anything that needs a closer look.</p></div>
            <div><TawkSupportButton label="Open live chat" fallbackHref="/support/ticket" /><Link className="button" href="/support/ticket">Open support ticket</Link></div>
          </section>
        </div><div className="spacer-3" /></div></div></section>
      </article>
    </main>
  );
}

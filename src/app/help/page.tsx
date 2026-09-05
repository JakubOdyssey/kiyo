import Link from "next/link";
import Breadcrumb from "@/parts/components/Breadcrumb";
import { helpCategories } from "@/data/help/helpCenterData";

export const metadata = {
  title: "Kiyo Help",
  description: "Guides for Kiyo Cloud hosting, domains, billing and accounts.",
  alternates: { canonical: "/help" },
};

export default function HelpPage() {
  return (
    <main className="main support-subpage">
      <article>
        <header className="page-header"><div className="container"><div className="page-header-container">
          <Breadcrumb />
          <h1 className="page-title">Kiyo Help</h1>
          <p className="width-6 font-size-medium">Simple guidance for hosting, domains and your Kiyo account.</p>
        </div></div></header>
        <section className="content"><div className="container"><div className="content-container">
          <section className="section support-directory" aria-labelledby="help-categories-title">
            <p className="domain-search-kicker">Knowledge base</p>
            <h2 id="help-categories-title" className="section-title">Browse by topic</h2>
            <p>Find practical guidance for setting up, managing and understanding your Kiyo services.</p>
            <div>{helpCategories.map((category) => (
              <section id={category.slug} key={category.slug}><div>
                <h3>{category.available ? <Link href={`/help/${category.slug}`}>{category.title}</Link> : category.title}</h3>
                <p>{category.description}</p>
                {category.available ? <Link className="help-category-link" href={`/help/${category.slug}`}>Browse articles <span aria-hidden="true">→</span></Link> : null}
              </div></section>
            ))}</div>
          </section>
          <div className="spacer-3" />
        </div></div></section>
      </article>
    </main>
  );
}

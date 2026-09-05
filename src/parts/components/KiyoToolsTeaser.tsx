const scoreMetrics = [
  ["Performance", 91],
  ["Mobile", 72],
  ["SEO", 86],
  ["Security", 95],
  ["Accessibility", 68],
] as const;

const recommendations = ["Improve mobile navigation", "Compress large images", "Improve text contrast"];

const supportingTools = [
  ["Monitoring", "Know when your website has a problem before your customers do."],
  ["Backups", "Keep important website data protected and easy to recover."],
  ["Security", "Simple protection and useful security insights without technical noise."],
] as const;

export default function KiyoToolsTeaser() {
  return (
    <section className="section kiyo-tools" aria-labelledby="kiyo-tools-title">
      <div className="kiyo-tools-heading">
        <div>
          <p className="domain-search-kicker">More than hosting</p>
          <h2 id="kiyo-tools-title" className="section-title">Tools that help keep your website healthy.</h2>
        </div>
        <p>Every Kiyo account will give you access to simple tools for understanding, protecting, and improving your website — without the usual technical complexity.</p>
      </div>

      <div className="kiyo-tools-layout">
        <article className="kiyo-score-preview" aria-labelledby="kiyo-score-title">
          <div className="kiyo-score-intro">
            <h3 id="kiyo-score-title">Website Score</h3>
            <p>See how your website performs across speed, mobile experience, SEO, security, and accessibility — explained in plain English.</p>
          </div>

          <div className="kiyo-score-summary">
            <div className="kiyo-score-number" aria-label="Example Website Score: 84 out of 100"><strong>84</strong><span>/ 100</span></div>
            <div className="kiyo-score-metrics">
              {scoreMetrics.map(([label, score]) => (
                <div key={label} className="kiyo-score-metric">
                  <div><span>{label}</span><strong>{score}</strong></div>
                  <div className="kiyo-score-track" aria-hidden="true"><span style={{ width: `${score}%` }} /></div>
                </div>
              ))}
            </div>
          </div>

          <div className="kiyo-score-recommendations">
            <h4>3 things worth fixing</h4>
            <ol>{recommendations.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol>
          </div>
        </article>

        <div className="kiyo-tools-supporting" aria-label="More future Kiyo tools">
          {supportingTools.map(([title, description], index) => (
            <article key={title}>
              <span>0{index + 2}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
          <p className="kiyo-tools-note">More tools are coming to the Kiyo experience.</p>
        </div>
      </div>
    </section>
  );
}

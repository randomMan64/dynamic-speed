import ContactForm from "./contact-form";
import {
  SiGo,
  SiJavascript,
  SiPhp,
  SiPython,
  SiRuby,
  SiRust,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const features = [
  {
    number: "01",
    title: "Edge-first by default",
    description:
      "Serve every request from the region closest to your users. Dynamic automatically routes traffic across 35+ global locations.",
    icon: "↗",
  },
  {
    number: "02",
    title: "Cache what matters",
    description:
      "A programmable cache with instant invalidation, stale-while-revalidate, and visibility into every hit and miss.",
    icon: "◌",
  },
  {
    number: "03",
    title: "Built for your workflow",
    description:
      "Ship with one line of code, inspect locally, and keep your existing stack. No proxy rewrites or infrastructure to babysit.",
    icon: "⌘",
  },
];

const languages = [
  { name: "JavaScript", className: "language-js", icon: SiJavascript },
  { name: "TypeScript", className: "language-ts", icon: SiTypescript },
  { name: "Python", className: "language-python", icon: SiPython },
  { name: "Go", className: "language-go", icon: SiGo },
  { name: "Rust", className: "language-rust", icon: SiRust },
  { name: "Java", className: "language-java", icon: FaJava },
  { name: "Ruby", className: "language-ruby", icon: SiRuby },
  { name: "PHP", className: "language-php", icon: SiPhp },
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="nav container">
        <a className="brand" href="#" aria-label="Dynamic home">
          <span className="brand-mark" aria-hidden="true">
            ✦
          </span>
          dynamic
        </a>
        <div className="nav-links">
          <a href="#product">Product</a>
          <a href="#developers">Developers</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs">Docs <span>↗</span></a>
        </div>
        <div className="nav-actions">
          <a className="button button-dark button-small" href="#contact">
            Get started <span>↗</span>
          </a>
        </div>
      </nav>

      <section className="hero container">
        <div className="eyebrow"><span className="status-dot" /> The speed layer for modern APIs</div>
        <h1>Make every API<br /><em>feel instant.</em></h1>
        <p className="hero-copy">
          Dynamic is the edge-native API platform for teams that care about
          speed. Deploy closer to your users, cache intelligently, and scale
          without the operational overhead.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#start">Start building <span>↗</span></a>
          <a className="button button-outline" href="#developers">Read the docs <span>→</span></a>
        </div>
        <div className="hero-note"><span>✦</span> No credit card required <span className="note-separator">·</span> Free forever on starter</div>

        <div className="code-card" aria-label="Dynamic API code example">
          <div className="window-bar">
            <div className="window-dots"><i /><i /><i /></div>
            <span className="window-title">api.ts</span>
            <span className="window-status">● live</span>
          </div>
          <div className="code-body">
            <div className="line-numbers">1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10</div>
            <pre><code>
              <span className="code-line"><span className="code-purple">import</span> {"{ dynamic }"} <span className="code-purple">from</span> <span className="code-green">&quot;@dynamic/sdk&quot;</span></span>
              <span className="code-line">&nbsp;</span>
              <span className="code-line"><span className="code-purple">const</span> user = <span className="code-purple">await</span> dynamic<span className="code-muted">.</span>cache<span className="code-muted">.</span>get<span className="code-muted">(</span></span>
              <span className="code-line">  <span className="code-green">&quot;/users/42&quot;</span><span className="code-muted">, {"{"}</span></span>
              <span className="code-line">    <span className="code-muted">revalidate:</span> <span className="code-orange">60</span><span className="code-muted">,</span></span>
              <span className="code-line">    <span className="code-muted">region:</span> <span className="code-green">&quot;nearest&quot;</span></span>
              <span className="code-line">  <span className="code-muted">{"}"})</span></span>
              <span className="code-line">&nbsp;</span>
              <span className="code-line"><span className="code-purple">if</span> <span className="code-muted">(!user) </span><span className="code-purple">return</span> <span className="code-muted">Response.error()</span></span>
              <span className="code-line"><span className="code-purple">return</span> <span className="code-muted">Response.json(user.data)</span></span>
            </code></pre>
          </div>
          <div className="code-footer"><span><b /> 23ms</span><span>cache hit</span><span>us-east-1</span></div>
        </div>
      </section>

      <section className="languages-section container" id="languages">
        <div className="languages-heading">
          <div>
            <div className="eyebrow">Works with your stack</div>
            <h2>Bring your<br /><em>favorite language.</em></h2>
          </div>
          <p>Build with the tools you already know. Dynamic gives every language the same fast, reliable API experience.</p>
        </div>
        <div className="language-grid">
          {languages.map(({ name, className, icon: Icon }) => (
            <a className={`language-card ${className}`} href="#developers" key={name} aria-label={`${name} SDK`}>
              <span className={`language-icon ${className}-icon`}><Icon aria-hidden="true" /></span>
              <span className="language-name">{name}</span>
              <span className="language-arrow">↗</span>
            </a>
          ))}
        </div>
        <p className="language-note">Official SDKs, first-class support, and examples for every team.</p>
      </section>

      <section className="section container" id="product">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Why Dynamic</div>
            <h2>Performance isn&apos;t<br /><em>a nice-to-have.</em></h2>
          </div>
          <p>Slow APIs cost trust, conversions, and momentum. Dynamic gives your backend a faster path to every user, wherever they are.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-top"><span>{feature.number}</span><strong>{feature.icon}</strong></div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href="#developers">Learn more <span>→</span></a>
            </article>
          ))}
        </div>
        <div className="speed-panel">
          <div className="speed-panel-copy">
            <div className="eyebrow">Dynamic Speed</div>
            <h3>Know exactly how fast<br /><em>every path should be.</em></h3>
            <p>Set a speed target for any route. Dynamic watches real user latency, finds the slowest region, and tells you when a path falls behind.</p>
            <a className="text-link" href="#developers">See speed insights <span>↗</span></a>
          </div>
          <div className="route-monitor">
            <div className="route-header"><span>Route monitor</span><span className="route-range">Last 24 hours⌄</span></div>
            <div className="route-path"><span className="method">GET</span><code>/v1/checkout/session</code><span className="route-health">On target</span></div>
            <div className="speed-bars">
              <div className="speed-row"><span>Target</span><div className="bar"><i className="target-bar" /></div><strong>&lt; 100ms</strong></div>
              <div className="speed-row"><span>Actual</span><div className="bar"><i className="actual-bar" /></div><strong>82ms</strong></div>
            </div>
            <div className="route-regions"><span>us-east-1 <b>64ms</b></span><span>eu-west-1 <b>91ms</b></span><span>ap-south-1 <b>108ms</b></span></div>
          </div>
        </div>
      </section>

      <section className="split-section container" id="developers">
        <div className="split-copy">
          <div className="eyebrow">The developer experience</div>
          <h2>From first request<br />to <em>full speed.</em></h2>
          <p>One SDK. One dashboard. Everything you need to understand and improve API performance without changing your architecture.</p>
          <a className="text-link" href="#docs">Explore the platform <span>↗</span></a>
        </div>
        <div className="metrics-card">
          <div className="metrics-header"><span>Request performance</span><span className="metric-live"><b /> Live</span></div>
          <div className="chart">
            <div className="chart-labels"><span>100ms</span><span>50ms</span><span>0ms</span></div>
            <div className="chart-grid">
              <i /><i /><i /><i />
              <svg className="chart-line" viewBox="0 0 700 180" preserveAspectRatio="none" aria-label="API latency trend">
                <polyline points="0,136 82,97 156,116 225,71 302,121 378,80 456,111 535,58 611,102 700,68" />
              </svg>
            </div>
          </div>
          <div className="metric-values"><div><strong>23ms</strong><span>p50 latency</span></div><div><strong>99.99%</strong><span>uptime</span></div><div><strong>4.2m</strong><span>requests / day</span></div></div>
        </div>
      </section>

      <section className="cta-section container" id="start">
        <div className="cta-card">
          <div className="eyebrow">Ready when you are</div>
          <h2>Give your APIs<br /><em>the speed they deserve.</em></h2>
          <p>Join thousands of teams building faster experiences with Dynamic.</p>
          <div className="hero-actions"><a className="button button-light" href="#signup">Start for free <span>↗</span></a><a className="button button-ghost" href="#contact">Talk to our team <span>→</span></a></div>
        </div>
      </section>

      <ContactForm />

      <footer className="footer container">
        <a className="brand" href="#"><span className="brand-mark">✦</span> dynamic</a>
        <p>© 2026 Dynamic, Inc. Built for speed.</p>
        <div><a href="#status">Status</a><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div>
      </footer>
    </main>
  );
}

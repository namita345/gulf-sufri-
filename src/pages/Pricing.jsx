import React from 'react';
import { Link } from 'react-router-dom';
import './pricing.css';

const oneTimePlans = [
  {
    id: 'first-bite',
    number: '01',
    eyebrow: 'THE FIRST BITE',
    name: 'The First Bite',
    subtitle: 'A perfect start for new restaurants or those getting online for the first time.',
    price: 'QAR 1,990',
    suffix: 'one-time',
    iconType: 'image',
    icon: '/assets/ornate_emerald_accented_genie_lamp.png',
    features: [
      'Landing page or digital menu',
      'Mobile-friendly design',
      'Basic search visibility setup',
      'Google Business profile setup',
      'Launch handover and guidance'
    ],
    cta: 'Get Started'
  },
  {
    id: 'main-course',
    number: '02',
    eyebrow: 'THE MAIN COURSE',
    name: 'The Main Course',
    subtitle: 'A complete digital home for growing restaurants.',
    price: 'QAR 4,490',
    suffix: 'one-time',
    badge: 'MOST POPULAR',
    featured: true,
    iconType: 'image',
    icon: '/assets/pricing-menu-card.png',
    features: [
      'Up to 5-page restaurant website',
      'Digital menu setup',
      'Google Business optimization',
      'Foundational SEO',
      'Contact or reservation inquiry setup',
      'Launch training and support'
    ],
    cta: 'Choose This Plan'
  },
  {
    id: 'full-sufra',
    number: '03',
    eyebrow: 'THE FULL SUFRA',
    name: 'The Full Sufra',
    subtitle: 'A richer launch experience for ambitious restaurants.',
    price: 'QAR 7,990',
    suffix: 'one-time',
    iconType: 'image',
    icon: '/assets/pricing-palace-icon.png',
    features: [
      'Up to 8-page restaurant website',
      'Digital menu and booking integration',
      'Bilingual-ready design scope',
      'Google Business optimization',
      'Analytics and launch creative kit',
      'Priority launch support'
    ],
    cta: 'Explore This Plan'
  }
];

const monthlyPlans = [
  {
    id: 'spark',
    number: '01',
    eyebrow: 'THE SPARK',
    name: 'The Spark',
    subtitle: 'Focused advertising to get you noticed.',
    price: 'QAR 1,990',
    suffix: '/ month',
    iconType: 'image',
    icon: '/assets/pricing-megaphone-icon.png',
    features: [
      'One advertising channel (Meta or Google)',
      'Campaign setup and optimization',
      'Up to 3 ad creatives',
      'Monthly performance report',
      'Email support'
    ],
    cta: 'Get Started'
  },
  {
    id: 'crowd-pleaser',
    number: '02',
    eyebrow: 'THE CROWD PLEASER',
    name: 'The Crowd Pleaser',
    subtitle: 'Social media + ads to attract more diners.',
    price: 'QAR 3,990',
    suffix: '/ month',
    badge: 'BEST VALUE',
    featured: true,
    iconType: 'image',
    icon: '/assets/pricing-bowl-icon.png',
    features: [
      'Instagram & Facebook management',
      '8 designed posts + 4 edited reels',
      'Meta advertising management',
      'Monthly content strategy',
      'Campaign optimization and reporting',
      'Priority support'
    ],
    cta: 'Choose This Plan'
  },
  {
    id: 'full-house',
    number: '03',
    eyebrow: 'THE FULL HOUSE',
    name: 'The Full House',
    subtitle: 'A complete growth partnership for established restaurants.',
    price: 'QAR 6,990',
    suffix: '/ month',
    iconType: 'bars',
    features: [
      '12 designed posts + 6 edited reels',
      'Meta + Google Ads management',
      'Google Business ongoing support',
      'Campaign tracking and optimization',
      'Monthly strategy review',
      'Dedicated account support'
    ],
    cta: 'Explore This Plan'
  }
];

const addons = [
  {
    title: 'Website Hosting',
    price: 'QAR 149 / month',
    detail: 'Reliable, secure hosting for your website.',
    icon: 'server'
  },
  {
    title: 'Website Maintenance',
    price: 'QAR 490 / month',
    detail: 'Updates, backups, security and small edits.',
    icon: 'gear'
  },
  {
    title: 'On-Site Photos & Videos',
    price: 'QAR 990',
    detail: 'Professional content at your restaurant.',
    icon: 'camera'
  }
];

const compareColumns = [
  'The First Bite',
  'The Main Course',
  'The Full Sufra',
  'The Spark',
  'The Crowd Pleaser',
  'The Full House'
];

const compareRows = [
  ['Website / Digital Menu', 'Landing page', 'Up to 5 pages', 'Up to 8 pages', '—', '—', '—'],
  ['Google Business Setup', '●', '●', '●', '—', '—', '—'],
  ['Social Media Management', '—', '—', '—', 'Ad channel only', '8 posts + 4 reels', '12 posts + 6 reels'],
  ['Advertising Management', '—', '—', '—', 'Meta or Google', 'Meta + strategy', 'Meta + Google'],
  ['Monthly Support', '—', '—', '—', '●', '●', '●']
];

const faqItems = [
  ['Is the advertising budget included?', 'No — ad spend is separate. The monthly plan covers strategy, setup, management, creative coordination, and optimization.'],
  ['Do I have to use your hosting?', 'Not at all. If you already have hosting, we can work with that. Hosting is offered only if you want us to handle it.'],
  ['What does website maintenance include?', 'Maintenance covers backups, updates, security checks, and minor text or image edits within the agreed monthly scope.'],
  ['Can I upgrade or change my plan later?', 'Yes. You can start small and grow into a bigger package as your restaurant expands.'],
  ['What happens after I make a payment?', 'After payment, we ask a few focused questions, collect the materials we need, and begin shaping everything around your restaurant.']
];

function BulletIcon({ type }) {
  if (type === 'restaurant') return <span className="gp-mini-icon">⌂</span>;
  if (type === 'fee') return <span className="gp-mini-icon">♥</span>;
  return <span className="gp-mini-icon">★</span>;
}

function AddonIcon({ type }) {
  if (type === 'server') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="12" y="12" width="40" height="12" rx="4" />
        <rect x="12" y="28" width="40" height="12" rx="4" />
        <rect x="12" y="44" width="40" height="8" rx="4" />
        <circle cx="20" cy="18" r="2.4" />
        <circle cx="20" cy="34" r="2.4" />
        <circle cx="20" cy="48" r="2.2" />
      </svg>
    );
  }
  if (type === 'gear') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M35 8h-6l-1.8 6.3a19 19 0 0 0-5.4 2.2l-5.8-2.8-4.2 4.2 2.8 5.8a19 19 0 0 0-2.2 5.4L8 29v6l6.3 1.8a19 19 0 0 0 2.2 5.4l-2.8 5.8 4.2 4.2 5.8-2.8a19 19 0 0 0 5.4 2.2L29 56h6l1.8-6.3a19 19 0 0 0 5.4-2.2l5.8 2.8 4.2-4.2-2.8-5.8a19 19 0 0 0 2.2-5.4L56 35v-6l-6.3-1.8a19 19 0 0 0-2.2-5.4l2.8-5.8-4.2-4.2-5.8 2.8a19 19 0 0 0-5.4-2.2L35 8Z" />
        <circle cx="32" cy="32" r="8" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="10" y="18" width="44" height="30" rx="5" />
      <path d="M22 18l3-6h14l3 6" />
      <circle cx="23" cy="33" r="4" />
      <path d="M42 25l8 8-8 8" />
    </svg>
  );
}

function PlanIcon({ plan }) {
  if (plan.iconType === 'image') return <img src={plan.icon} alt="" loading="lazy" />;
  return (
    <div className="gp-bars-graphic" aria-hidden="true">
      <span />
      <span />
      <span />
      <i className="gp-palm" />
    </div>
  );
}

function PlanCard({ plan, queryType = 'one-time' }) {
  return (
    <article className={`gp-plan-card${plan.featured ? ' is-featured' : ''}`}>
      <div className="gp-plan-topline">
        <span className="gp-plan-micro">{plan.number} • {plan.eyebrow}</span>
        {plan.badge && <span className="gp-plan-badge">{plan.badge}</span>}
      </div>
      <div className="gp-plan-head">
        <div>
          <h3>{plan.name}</h3>
          <p className="gp-plan-subtitle">{plan.subtitle}</p>
        </div>
        <div className="gp-plan-art"><PlanIcon plan={plan} /></div>
      </div>
      <div className="gp-plan-price-row">
        <div className="gp-plan-price">{plan.price}</div>
        <small>{plan.suffix}</small>
      </div>
      <ul className="gp-feature-list">
        {plan.features.map((feature) => (
          <li key={feature}><span>✓</span>{feature}</li>
        ))}
      </ul>
      <Link className={`gp-btn ${plan.featured ? 'gp-btn-gold' : 'gp-btn-outline'}`} to={`/contact?pricing=${queryType}&plan=${plan.id}`}>{plan.cta} <i>→</i></Link>
    </article>
  );
}

export default function Pricing() {
  const [activeTab, setActiveTab] = React.useState('one-time');
  const [monthlyPackage, setMonthlyPackage] = React.useState('3990');
  const [adSpend, setAdSpend] = React.useState('1500');
  const [profitPerOrder, setProfitPerOrder] = React.useState(35);

  const totalMonthlyCost = Number(monthlyPackage) + Number(adSpend);
  const ordersNeeded = Math.ceil(totalMonthlyCost / profitPerOrder);
  const ordersPerDay = Math.ceil(ordersNeeded / 30);

  const jumpTo = (type) => {
    setActiveTab(type);
    document.getElementById('gp-pricing-plans')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="gp-page">
      <section className="gp-hero">
        <div className="gp-shell gp-hero-shell">
          <div className="gp-hero-copy">
            <span className="gp-kicker">PRICING MADE SIMPLE</span>
            <h1>Choose Your <em>Recipe for Success.</em></h1>
            <p>
              Whether you're just getting started or ready to grow, we have the perfect mix of digital
              services to help your restaurant shine. Transparent pricing. Real value. Delicious results.
            </p>
            <div className="gp-hero-points">
              <span><BulletIcon type="restaurant" />Built for Restaurants</span>
              <span><BulletIcon type="fee" />No Hidden Fees</span>
              <span><BulletIcon type="mix" />Flexible Options</span>
            </div>
          </div>

          <div className="gp-hero-visual" aria-label="Sufri presenting pricing options">
            <img className="gp-sufri" src="/assets/pricing-sufri-chef.png" alt="Sufri on his magic carpet" />
            
            <div className="gp-speech-bubble">Good marketing is like a great meal... There's a perfect recipe for everyone!</div>
          </div>
        </div>
      </section>

      <section className="gp-tabs-wrap">
        <div className="gp-shell">
          <div className="gp-tabs" role="tablist" aria-label="Pricing categories">
            <button className={activeTab === 'one-time' ? 'is-active' : ''} onClick={() => jumpTo('one-time')} role="tab" aria-selected={activeTab === 'one-time'}>
              <span className="gp-tab-icon">✦</span>
              <span>
                <strong>One-Time Magic</strong>
                <small>Build your digital foundation</small>
              </span>
            </button>
            <button className={activeTab === 'monthly' ? 'is-active' : ''} onClick={() => jumpTo('monthly')} role="tab" aria-selected={activeTab === 'monthly'}>
              <span className="gp-tab-icon">✦</span>
              <span>
                <strong>Monthly Momentum</strong>
                <small>Ongoing growth and results</small>
              </span>
            </button>
          </div>
        </div>
      </section>

      <div className="gp-body">
        <section className="gp-shell gp-box gp-section gp-plans-section" id="gp-pricing-plans">
          <div className="gp-section-head">
            <div>
              <span className="gp-kicker">{activeTab === 'one-time' ? 'ONE-TIME SERVICES' : 'MONTHLY SERVICES'}</span>
              <h2>{activeTab === 'one-time' ? <>Build Your <em>Digital Foundation.</em></> : <>Keep Your Restaurant <em>Growing.</em></>}</h2>
            </div>
            <p>{activeTab === 'one-time' ? 'Get everything your restaurant needs to look amazing online. A one-time investment for a long-term impact.' : 'Ongoing creative content, advertising, and support to attract more diners and build a loyal community.'}</p>
          </div>
          <div className="gp-card-grid three-up" key={activeTab}>
            {(activeTab === 'one-time' ? oneTimePlans : monthlyPlans).map(plan => <PlanCard key={plan.id} plan={plan} queryType={activeTab} />)}
          </div>
          <p className="gp-pricing-disclaimer">Advertising budgets are separate. Hosting, maintenance and production are optional unless specifically included in your plan. Final deliverables and payment terms are confirmed before purchase.</p>
        </section>

        <section className="gp-shell gp-box gp-section gp-addons">
          <div className="gp-section-head compact">
            <div>
              <span className="gp-kicker">OPTIONAL ADD-ONS</span>
              <h2>Make It Even <em>Better.</em></h2>
            </div>
            <p>Add hosting or website maintenance based on your needs.</p>
          </div>
          <div className="gp-addon-grid">
            {addons.map((addon) => (
              <article className="gp-addon-card" key={addon.title}>
                <div className="gp-addon-icon"><AddonIcon type={addon.icon} /></div>
                <div>
                  <h3>{addon.title}</h3>
                  <strong>From {addon.price}</strong>
                  <p>{addon.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="gp-shell gp-box gp-section">
          <div className="gp-section-head compact">
            <div>
              <span className="gp-kicker">QUICK COMPARISON</span>
              <h2>Find the Right <em>Mix for You.</em></h2>
            </div>
          </div>
          <div className="gp-compare-wrap">
            <table className="gp-compare-table">
              <thead>
                <tr>
                  <th></th>
                  {compareColumns.map((col, index) => (
                    <th key={col} className={index === 1 ? 'is-highlight' : ''}>
                      <span>{col}</span>
                      {index === 1 && <small>Most Popular</small>}
                      {index === 4 && <small>Best Value</small>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row[0]}>
                    <th>{row[0]}</th>
                    {row.slice(1).map((cell, idx) => (
                      <td key={idx} className={idx === 1 ? 'is-highlight' : ''}>{cell === '●' ? <span className="gp-check-dot">●</span> : cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="gp-shell gp-box gp-section gp-calculator">
          <div className="gp-calculator-art">
            <img src="/assets/pricing-marina-crab.png" alt="Marina and her crab helping with restaurant growth" />
            <div className="gp-thought">Let's do some quick math, habibi! See how many extra diners you need to make it a delicious success.</div>
          </div>
          <div className="gp-calculator-panel">
            <span className="gp-kicker">RESTAURANT GROWTH CALCULATOR</span>
            <h2>How Many Extra <em>Orders?</em></h2>
            <p>See how many additional orders you need to cover your monthly marketing investment.</p>
            <div className="gp-calc-row gp-top-calc">
              <label>
                <span>Monthly Package Fee</span>
                <select value={monthlyPackage} onChange={(e) => setMonthlyPackage(e.target.value)}>
                  <option value="1990">QAR 1,990</option>
                  <option value="3990">QAR 3,990</option>
                  <option value="6990">QAR 6,990</option>
                </select>
              </label>
              <div className="gp-calc-operator">+</div>
              <label>
                <span>Ad Spend (Estimated)</span>
                <select value={adSpend} onChange={(e) => setAdSpend(e.target.value)}>
                  <option value="1000">QAR 1,000</option>
                  <option value="1500">QAR 1,500</option>
                  <option value="2500">QAR 2,500</option>
                  <option value="4000">QAR 4,000</option>
                </select>
              </label>
              <div className="gp-calc-operator">=</div>
              <div className="gp-total-box">
                <span>Total Monthly Cost</span>
                <strong>QAR {totalMonthlyCost.toLocaleString()}</strong>
              </div>
            </div>
            <div className="gp-calc-row gp-bottom-calc">
              <label className="gp-slider-box">
                <span>Profit per Extra Order</span>
                <strong>QAR {profitPerOrder}</strong>
                <input type="range" min="20" max="80" step="5" value={profitPerOrder} onChange={(e) => setProfitPerOrder(Number(e.target.value))} />
              </label>
              <div className="gp-result-box">
                <span>You Need About</span>
                <strong>{ordersNeeded}</strong>
                <p>Extra Orders Per Month <small>({ordersPerDay} extra orders per day)</small></p>
              </div>
            </div>
          </div>
        </section>

        <section className="gp-shell gp-section gp-simple-steps">
          <div className="gp-steps-topline">
            <div>
              <span className="gp-kicker">SIMPLE STEPS</span>
              <h2>From Click to <em>Delicious Results.</em></h2>
            </div>
            <p>Get started in just a few simple steps. Detailed questions come after payment.</p>
          </div>
          <div className="gp-step-row">
            <article><span className="gp-step-num">1</span><h3>Choose Your Plan</h3><p>Pick the perfect mix for your restaurant.</p></article>
            <i>→</i>
            <article><span className="gp-step-num">2</span><h3>Pay Securely</h3><p>Complete your payment online.</p></article>
            <i>→</i>
            <article><span className="gp-step-num">3</span><h3>Tell Us About You</h3><p>Answer a few questions after checkout.</p></article>
            <i>→</i>
            <article><span className="gp-step-num">4</span><h3>We Do the Magic</h3><p>Sit back while we bring your vision to life.</p></article>
          </div>
        </section>

        <section className="gp-shell gp-box gp-section gp-faq-cta">
          <div className="gp-faq-column">
            <span className="gp-kicker">GOOD QUESTIONS, GOOD ANSWERS</span>
            <h2>A Few Things <em>Worth Knowing.</em></h2>
            <p>Everything you need to know before getting started.</p>
          </div>
          <div className="gp-faq-list">
            {faqItems.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
          <div className="gp-side-cta">
            <span className="gp-kicker">READY TO GET STARTED?</span>
            <h3>Your Restaurant. <em>Your Perfect Mix.</em></h3>
            <p>Let's create a customised plan for your restaurant. Tell us a bit about your needs and we'll recommend the best options.</p>
            <Link className="gp-btn gp-btn-gold" to="/contact?pricing=tailored">Get My Tailored Quote <i>→</i></Link>
          </div>
        </section>
      </div>
    </main>
  );
}

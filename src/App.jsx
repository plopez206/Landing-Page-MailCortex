import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplySection from './components/ApplySection';

/* ===================== REUSABLE COMPONENTS ===================== */

const HeaderNav = () => (
  <header className="navbar navbar-expand-md navbar-light bg-white shadow-sm sticky-top">
    <div className="container">
      <a className="navbar-brand d-flex align-items-center" href="#">
        {/* Replace emoji with PNG logo */}
        <img src="/LogoMailCortex.png" alt="Mail Cortex Logo" width={52} height={52} className="me-2" />
        Email Cortex
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-md-center">
          <li className="nav-item">
            <a className="nav-link" href="#features">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#how">How It Works</a>
          </li>
          <li className="nav-item my-2 my-md-0 ms-md-3">
            <a href="#apply" className="btn btn-primary">Apply for Early Access</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="hero d-flex align-items-center text-white position-relative">
    <video
      className="bg-video position-absolute w-100 h-100 top-0 start-0"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/VideoLandingPage.mp4" type="video/mp4" />
    </video>
    <div className="container position-relative z-1 py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-5 fw-bold">Automate Your Inbox in One Click</h1>
          <p className="lead">
            Auto‑labels your last emails into ✅ Action Required, ⚠️ Important, 🧾 Receipts...
          </p>
          <a href="#apply" className="btn btn-lg btn-primary hero-cta">
            Apply for Early Access
          </a>
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title }) => (
  <div className="col-md-4 mb-4">
    <div className="icon-box p-4 border rounded-3 h-100 text-center">
      <div className="display-6 mb-3">{icon}</div>
      <h3 className="h5 mb-0">{title}</h3>
    </div>
  </div>
);

const FeaturesSection = () => (
  <section id="features" className="features py-5">
    <div className="container">
      <div className="row text-center">
        <FeatureCard icon="🔌" title="One‑Click Gmail Connect" />
        <FeatureCard icon="🧠" title="Smart Categories" />
        <FeatureCard icon="🔒" title="Private Beta Access" />
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="testimonials bg-light py-5">
    <div className="container">
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[
            { text: '“Saved me 20 minutes/day.”', author: 'Beta User' },
            { text: '“Like magic for my inbox.”', author: 'Product Hunt Comment' },
            { text: '“Finally, inbox zero on autopilot.”', author: 'Early Tester' }
          ].map((t, i) => (
            <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
              <blockquote className="blockquote text-center">
                <p className="mb-4">{t.text}</p>
                <footer className="blockquote-footer">{t.author}</footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const StepItem = ({ num, title }) => (
  <div className="col-md-4 text-center">
    <div className="step-circle mb-3">{num}</div>
    <h3 className="h6 fw-semibold mb-0">{title}</h3>
  </div>
);

const HowItWorksSection = () => (
  <section id="how" className="how-it-works py-5">
    <div className="container">
      <h2 className="text-center mb-5">How It Works</h2>
      <div className="row g-4">
        <StepItem num={1} title="Connect Gmail" />
        <StepItem num={2} title="AI Analyzes" />
        <StepItem num={3} title="Labels Appear" />
      </div>
    </div>
  </section>
);

const StickyCTA = () => (
  <aside className="sticky-cta bg-white shadow-sm p-3 fixed-bottom d-md-none text-center">
    <a href="#apply" className="btn btn-primary w-100">Apply for Early Access</a>
  </aside>
);

const FooterSection = () => (
  <footer className="py-3 bg-white border-top small">
    <div className="container d-flex flex-column flex-md-row justify-content-between">
      <span>We never read or store your emails.</span>
      <span>
        <a href="#" className="text-decoration-none me-3">Privacy Policy</a>
        <a href="#" className="text-decoration-none">Contact</a>
      </span>
    </div>
  </footer>
);

/* ===================== MAIN PAGE WRAPPER ===================== */

const App = () => (
  <div>
    <HeaderNav />
    <HeroSection />
    <FeaturesSection />
    <TestimonialsSection />
    <HowItWorksSection />
    <StickyCTA />
    <ApplySection />
    <FooterSection />

    {/* Inline styles scoped to this component */}
    <style>{`
      .hero { min-height: 100vh; position: relative; overflow: hidden; }
      .bg-video { object-fit: cover; filter: brightness(0.55); }
      .hero-cta:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0,0,0,0.2); transition: all 0.2s; }
      .icon-box:hover { transform: translateY(-4px); transition: transform 0.2s; box-shadow: 0 2px 12px rgba(0,0,0,0.07); }
      .step-circle { width:64px; height:64px; border-radius:50%; background:#4DA1FF; color:#fff; display:flex; align-items:center; justify-content:center; font-size:1.5rem; margin:0 auto; }
    `}</style>
  </div>
);

export default App;

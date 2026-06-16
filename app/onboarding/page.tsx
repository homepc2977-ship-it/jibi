import Link from "next/link";
import { AppHeader } from "../components/AppHeader";
import { BottomNav } from "../components/BottomNav";

export default function OnboardingPage() {
  return (
    <main className="app-shell">
      <section className="phone">
        <div className="screen">
          <AppHeader />
          <section className="hero-card">
            <p className="hero-label">Welcome to JIBI</p>
            <h1 className="hero-number" style={{ fontSize: 34 }}>Build your first budget</h1>
            <p className="hero-note">Answer a few questions and JIBI will calculate your safe-to-spend amount.</p>
          </section>

          <div className="section-title"><h2>Setup questions</h2><span className="badge">5 min</span></div>
          <section className="panel">
            <div className="form-grid">
              <label className="field">How much do you earn?<input inputMode="decimal" placeholder="$2,100" /></label>
              <label className="field">How often do you get paid?<select><option>Every 2 weeks</option><option>Weekly</option><option>Monthly</option></select></label>
              <label className="field">Next payday<input type="date" /></label>
              <label className="field">Main fixed payment<input placeholder="Rent, mortgage, car payment..." /></label>
              <label className="field">Payment amount<input inputMode="decimal" placeholder="$1,500" /></label>
              <Link href="/" className="cta">Create my JIBI dashboard</Link>
            </div>
          </section>
        </div>
      </section>
      <BottomNav active="Home" />
    </main>
  );
}

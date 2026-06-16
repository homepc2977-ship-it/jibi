import { AppHeader } from "../components/AppHeader";
import { BottomNav } from "../components/BottomNav";
import { demoSplits } from "../data/demo";

export default function SplitPage() {
  return (
    <main className="app-shell">
      <section className="phone">
        <div className="screen">
          <AppHeader />
          <section className="hero-card">
            <p className="hero-label">Split expenses</p>
            <h1 className="hero-number">${demoSplits.reduce((sum, item) => sum + item.total, 0).toLocaleString()}</h1>
            <p className="hero-note">Trips, dinners, roommates, family bills.</p>
          </section>

          <div className="section-title"><h2>Active splits</h2><button className="icon-button">+</button></div>
          <section className="panel">
            {demoSplits.map((split) => {
              const perPerson = Math.round(split.total / split.people.length);
              return (
                <article key={split.id} style={{ marginBottom: 18 }}>
                  <div className="money-row" style={{ borderBottom: 0, padding: "0 0 7px" }}>
                    <div>
                      <strong>{split.title}</strong>
                      <div style={{ color: "var(--muted)", fontSize: 12 }}>Paid by {split.paidBy} · {split.people.length} people</div>
                    </div>
                    <span className="amount-positive">${split.total}</span>
                  </div>
                  <div className="info-row"><span>Each person</span><strong>${perPerson}</strong></div>
                  <div className="info-row"><span>People</span><strong>{split.people.join(", ")}</strong></div>
                </article>
              );
            })}
          </section>

          <div className="section-title"><h2>Split options</h2></div>
          <div className="card-grid">
            <div className="feature-card"><div className="emoji">🍽️</div><h3>Dinner</h3><p>Split restaurant bills quickly.</p></div>
            <div className="feature-card"><div className="emoji">✈️</div><h3>Trip</h3><p>Track hotels, gas, activities.</p></div>
            <div className="feature-card"><div className="emoji">🏠</div><h3>Household</h3><p>Rent, utilities, groceries.</p></div>
            <div className="feature-card"><div className="emoji">🎉</div><h3>Party</h3><p>Who paid and who owes.</p></div>
          </div>
        </div>
      </section>
      <BottomNav active="Split" />
    </main>
  );
}

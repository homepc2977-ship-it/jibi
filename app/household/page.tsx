import { AppHeader } from "../components/AppHeader";
import { BottomNav } from "../components/BottomNav";

const sharedBills = [
  { name: "Rent", amount: 1500, split: "60/40" },
  { name: "Groceries", amount: 520, split: "50/50" },
  { name: "Internet", amount: 70, split: "50/50" },
];

export default function HouseholdPage() {
  return (
    <main className="app-shell">
      <section className="phone">
        <div className="screen">
          <AppHeader />
          <section className="hero-card">
            <p className="hero-label">Household budget</p>
            <h1 className="hero-number">$2,090</h1>
            <p className="hero-note">Shared bills with spouse, partner, roommate, or family.</p>
          </section>

          <div className="section-title"><h2>Shared payments</h2><button className="icon-button">+</button></div>
          <section className="panel">
            {sharedBills.map((bill) => (
              <div className="money-row" key={bill.name}>
                <div><strong>{bill.name}</strong><div style={{ color: "var(--muted)", fontSize: 12 }}>Split {bill.split}</div></div>
                <span>${bill.amount}</span>
              </div>
            ))}
          </section>

          <div className="section-title"><h2>Split method</h2></div>
          <section className="panel">
            <div className="info-row"><span>Equal split</span><strong>50 / 50</strong></div>
            <div className="info-row"><span>Income ratio</span><strong>Available</strong></div>
            <div className="info-row"><span>Private expenses</span><strong>Hidden</strong></div>
          </section>
        </div>
      </section>
      <BottomNav active="Budget" />
    </main>
  );
}

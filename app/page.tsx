import Link from "next/link";
import { AppHeader } from "./components/AppHeader";
import { BottomNav } from "./components/BottomNav";
import { calculateSafeToSpend, demoBills, demoCategories, demoGoals, demoIncome } from "./data/demo";

const menuCards = [
  { title: "Budget Setup", emoji: "💸", href: "/budget", text: "Income, fixed bills, categories." },
  { title: "Pay Calendar", emoji: "📅", href: "/calendar", text: "Paydays, bills, reminders." },
  { title: "Goals", emoji: "🏠", href: "/goals", text: "House, car, savings timelines." },
  { title: "Split", emoji: "🤝", href: "/split", text: "Trips, dinners, shared bills." },
];

export default function Home() {
  const safeToSpend = calculateSafeToSpend();
  const upcomingTotal = demoBills.filter((bill) => !bill.paid).reduce((sum, bill) => sum + bill.amount, 0);

  return (
    <main className="app-shell">
      <section className="phone">
        <div className="screen">
          <AppHeader />

          <section className="hero-card">
            <p className="hero-label">Safe to spend before next payday</p>
            <h1 className="hero-number">${safeToSpend.toLocaleString()}</h1>
            <p className="hero-note">Next payday: {demoIncome.nextPaydayDate} · ${demoIncome.nextPaydayAmount.toLocaleString()}</p>
          </section>

          <div className="section-title">
            <h2>Quick actions</h2>
            <span className="badge">MVP</span>
          </div>
          <div className="card-grid">
            {menuCards.map((card) => (
              <Link key={card.href} href={card.href} className="feature-card">
                <div className="emoji">{card.emoji}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </Link>
            ))}
          </div>

          <div className="section-title">
            <h2>Before payday</h2>
            <strong className="amount-danger">-${upcomingTotal.toLocaleString()}</strong>
          </div>
          <section className="panel">
            {demoBills.slice(0, 3).map((bill) => (
              <div className="money-row" key={bill.id}>
                <div>
                  <strong>{bill.name}</strong>
                  <div style={{ color: "var(--muted)", fontSize: 12 }}>{bill.date} · {bill.category}</div>
                </div>
                <span className="amount-danger">${bill.amount}</span>
              </div>
            ))}
          </section>

          <div className="section-title">
            <h2>Monthly budget</h2>
            <Link href="/budget" style={{ color: "var(--mint-dark)", fontWeight: 900, textDecoration: "none" }}>Edit</Link>
          </div>
          <section className="panel">
            {demoCategories.slice(0, 3).map((category) => {
              const percent = Math.min(100, Math.round((category.spent / category.budgeted) * 100));
              return (
                <div key={category.id} style={{ marginBottom: 15 }}>
                  <div className="money-row" style={{ borderBottom: 0, padding: "0 0 7px" }}>
                    <strong>{category.name}</strong>
                    <span>${category.spent} / ${category.budgeted}</span>
                  </div>
                  <div className="progress-track"><div className="progress-fill" style={{ width: `${percent}%` }} /></div>
                </div>
              );
            })}
          </section>

          <div className="section-title">
            <h2>Goals</h2>
            <Link href="/goals" style={{ color: "var(--mint-dark)", fontWeight: 900, textDecoration: "none" }}>View all</Link>
          </div>
          <section className="panel">
            {demoGoals.slice(0, 2).map((goal) => {
              const percent = Math.round((goal.saved / goal.target) * 100);
              return (
                <div key={goal.id} style={{ marginBottom: 15 }}>
                  <div className="money-row" style={{ borderBottom: 0, padding: "0 0 7px" }}>
                    <strong>{goal.name}</strong>
                    <span>{percent}%</span>
                  </div>
                  <div className="progress-track"><div className="progress-fill" style={{ width: `${percent}%` }} /></div>
                </div>
              );
            })}
          </section>
        </div>
      </section>
      <BottomNav active="Home" />
    </main>
  );
}

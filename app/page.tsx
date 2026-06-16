import { BottomNav } from "./components/BottomNav";
import { calculateSafeToSpend, demoBills, demoCategories, demoGoals, demoIncome } from "./data/demo";

const quickActions = [
  { label: "Add", icon: "+", href: "/budget" },
  { label: "Move", icon: "↔", href: "/split" },
  { label: "Plan", icon: "✓", href: "/goals" },
];

const menuCards = [
  { title: "Budget", icon: "BUD", href: "/budget", text: "Income, fixed bills, categories, and safe limits." },
  { title: "Calendar", icon: "CAL", href: "/calendar", text: "Paydays, subscriptions, bills, and reminders." },
  { title: "Goals", icon: "GOAL", href: "/goals", text: "House, car, emergency fund, and savings timelines." },
  { title: "Split", icon: "SPL", href: "/split", text: "Group expenses, household bills, trips, and dinners." },
];

export default function Home() {
  const safeToSpend = calculateSafeToSpend();
  const upcomingTotal = demoBills.filter((bill) => !bill.paid).reduce((sum, bill) => sum + bill.amount, 0);
  const budgetSpent = demoCategories.reduce((sum, item) => sum + item.spent, 0);
  const budgeted = demoCategories.reduce((sum, item) => sum + item.budgeted, 0);
  const budgetPercent = Math.min(100, Math.round((budgetSpent / budgeted) * 100));

  return (
    <main className="app-shell">
      <section className="phone">
        <div className="screen">
          <header className="bank-header">
            <div className="bank-topline">
              <a href="/" className="brand-lockup">
                <div className="brand-mark">J</div>
                <div className="brand-text">
                  <strong>JIBI</strong>
                  <span>Smart money control</span>
                </div>
              </a>
              <button type="button" className="round-action">+</button>
            </div>

            <p className="greeting">Good afternoon</p>
            <h1 className="header-title">Your money before payday</h1>

            <section className="balance-card">
              <p className="balance-label">Safe to spend</p>
              <h2 className="balance-number">${safeToSpend.toLocaleString()}</h2>
              <p className="balance-meta">After upcoming bills, food buffer, and emergency reserve.</p>
              <div className="quick-actions">
                {quickActions.map((action) => (
                  <a key={action.href} href={action.href} className="quick-action">
                    <span className="quick-icon">{action.icon}</span>
                    {action.label}
                  </a>
                ))}
              </div>
            </section>
          </header>

          <div className="content-pad">
            <div className="section-title">
              <h2>Money snapshot</h2>
              <span className="badge">Next pay {demoIncome.nextPaydayDate}</span>
            </div>
            <section className="insight-card alert">
              <div className="insight-row">
                <div>
                  <div className="row-title">Current balance</div>
                  <div className="row-subtitle">Available in account</div>
                </div>
                <span className="amount-navy">${demoIncome.currentBalance.toLocaleString()}</span>
              </div>
              <div className="insight-row">
                <div>
                  <div className="row-title">Upcoming before payday</div>
                  <div className="row-subtitle">Bills not paid yet</div>
                </div>
                <span className="amount-danger">-${upcomingTotal.toLocaleString()}</span>
              </div>
              <div className="insight-row">
                <div>
                  <div className="row-title">Next income</div>
                  <div className="row-subtitle">{demoIncome.nextPaydayDate}</div>
                </div>
                <span className="amount-positive">+${demoIncome.nextPaydayAmount.toLocaleString()}</span>
              </div>
            </section>

            <div className="section-title">
              <h2>Navigate</h2>
              <a href="/onboarding">Setup</a>
            </div>
            <div className="card-grid">
              {menuCards.map((card) => (
                <a key={card.href} href={card.href} className="feature-card">
                  <div className="feature-icon">{card.icon}</div>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="section-title">
              <h2>Budget health</h2>
              <a href="/budget">Edit</a>
            </div>
            <section className="panel">
              <div className="money-row" style={{ borderBottom: 0, paddingTop: 0 }}>
                <div>
                  <div className="row-title">Monthly spending</div>
                  <div className="row-subtitle">${budgetSpent.toLocaleString()} of ${budgeted.toLocaleString()}</div>
                </div>
                <span className="amount-navy">{budgetPercent}%</span>
              </div>
              <div className="progress-track"><div className="progress-fill" style={{ width: `${budgetPercent}%` }} /></div>
              {demoCategories.slice(0, 3).map((category) => {
                const percent = Math.min(100, Math.round((category.spent / category.budgeted) * 100));
                return (
                  <div key={category.id} style={{ marginTop: 15 }}>
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
              <h2>Top goals</h2>
              <a href="/goals">View all</a>
            </div>
            <section className="panel">
              {demoGoals.slice(0, 2).map((goal) => {
                const percent = Math.round((goal.saved / goal.target) * 100);
                return (
                  <div key={goal.id} style={{ marginBottom: 15 }}>
                    <div className="money-row" style={{ borderBottom: 0, padding: "0 0 7px" }}>
                      <div>
                        <strong>{goal.name}</strong>
                        <div className="row-subtitle">Target {goal.deadline}</div>
                      </div>
                      <span className="amount-navy">{percent}%</span>
                    </div>
                    <div className="progress-track"><div className="progress-fill" style={{ width: `${percent}%` }} /></div>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </section>
      <BottomNav active="Home" />
    </main>
  );
}

import { AppHeader } from "../components/AppHeader";
import { BottomNav } from "../components/BottomNav";
import { demoBills, demoCategories, demoIncome } from "../data/demo";

export default function BudgetPage() {
  const totalBudgeted = demoCategories.reduce((sum, item) => sum + item.budgeted, 0);
  const fixedCharges = demoBills.reduce((sum, bill) => sum + bill.amount, 0);

  return (
    <main className="app-shell">
      <section className="phone">
        <div className="screen">
          <AppHeader />
          <section className="hero-card">
            <p className="hero-label">Monthly income</p>
            <h1 className="hero-number">${demoIncome.monthlyIncome.toLocaleString()}</h1>
            <p className="hero-note">Budgeted: ${totalBudgeted.toLocaleString()} · Fixed charges: ${fixedCharges.toLocaleString()}</p>
          </section>

          <div className="section-title"><h2>Budget setup</h2><span className="badge">Step 1</span></div>
          <section className="panel">
            <div className="form-grid">
              <label className="field">How often do you get paid?<select defaultValue="biweekly"><option value="weekly">Weekly</option><option value="biweekly">Every 2 weeks</option><option value="monthly">Monthly</option></select></label>
              <label className="field">Net pay amount<input defaultValue="2100" inputMode="decimal" /></label>
              <label className="field">Next payday<input defaultValue="2026-06-28" type="date" /></label>
            </div>
          </section>

          <div className="section-title"><h2>Fixed charges</h2><button className="icon-button">+</button></div>
          <section className="panel">
            {demoBills.map((bill) => (
              <div className="money-row" key={bill.id}>
                <div><strong>{bill.name}</strong><div style={{ color: "var(--muted)", fontSize: 12 }}>{bill.date}</div></div>
                <span className="amount-danger">${bill.amount}</span>
              </div>
            ))}
          </section>

          <div className="section-title"><h2>Categories</h2><button className="icon-button">+</button></div>
          <section className="panel">
            {demoCategories.map((category) => (
              <div className="money-row" key={category.id}>
                <strong>{category.name}</strong>
                <span>${category.budgeted}</span>
              </div>
            ))}
          </section>
        </div>
      </section>
      <BottomNav active="Budget" />
    </main>
  );
}

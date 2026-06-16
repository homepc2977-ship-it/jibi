import { AppHeader } from "../components/AppHeader";
import { BottomNav } from "../components/BottomNav";
import { demoBills, demoIncome } from "../data/demo";

const reminders = [
  { title: "Payday", date: demoIncome.nextPaydayDate, type: "Income", amount: demoIncome.nextPaydayAmount },
  ...demoBills.map((bill) => ({ title: bill.name, date: bill.date, type: bill.category, amount: -bill.amount })),
];

export default function CalendarPage() {
  return (
    <main className="app-shell">
      <section className="phone">
        <div className="screen">
          <AppHeader />
          <section className="hero-card">
            <p className="hero-label">Calendar & reminders</p>
            <h1 className="hero-number">{reminders.length}</h1>
            <p className="hero-note">Upcoming money events before and after payday.</p>
          </section>

          <div className="section-title"><h2>Upcoming</h2><span className="badge">Auto reminders</span></div>
          <section className="panel">
            {reminders.map((item) => (
              <div className="money-row" key={`${item.title}-${item.date}`}>
                <div>
                  <strong>{item.title}</strong>
                  <div style={{ color: "var(--muted)", fontSize: 12 }}>{item.date} · {item.type}</div>
                </div>
                <span className={item.amount >= 0 ? "amount-positive" : "amount-danger"}>{item.amount >= 0 ? "+" : "-"}${Math.abs(item.amount).toLocaleString()}</span>
              </div>
            ))}
          </section>

          <div className="section-title"><h2>Reminder rules</h2></div>
          <section className="panel">
            <div className="info-row"><span>Bill reminders</span><strong>3 days before</strong></div>
            <div className="info-row"><span>Low safe-to-spend alert</span><strong>Under $100</strong></div>
            <div className="info-row"><span>Goal contribution</span><strong>On payday</strong></div>
          </section>
        </div>
      </section>
      <BottomNav active="Calendar" />
    </main>
  );
}

import { AppHeader } from "../components/AppHeader";
import { BottomNav } from "../components/BottomNav";
import { calculateGoalMonthlyContribution, demoGoals } from "../data/demo";

export default function GoalsPage() {
  return (
    <main className="app-shell">
      <section className="phone">
        <div className="screen">
          <AppHeader />
          <section className="hero-card">
            <p className="hero-label">Your goals</p>
            <h1 className="hero-number">{demoGoals.length}</h1>
            <p className="hero-note">Extreme, Normal, and Comfortable saving timelines.</p>
          </section>

          <div className="section-title"><h2>Goal timelines</h2><button className="icon-button">+</button></div>
          <section className="panel">
            {demoGoals.map((goal) => {
              const percent = Math.round((goal.saved / goal.target) * 100);
              const monthly = calculateGoalMonthlyContribution(goal);
              return (
                <article key={goal.id} style={{ marginBottom: 18 }}>
                  <div className="money-row" style={{ borderBottom: 0, padding: "0 0 7px" }}>
                    <div>
                      <strong>{goal.name}</strong>
                      <div style={{ color: "var(--muted)", fontSize: 12 }}>{goal.mode} plan · target {goal.deadline}</div>
                    </div>
                    <span>{percent}%</span>
                  </div>
                  <div className="progress-track"><div className="progress-fill" style={{ width: `${percent}%` }} /></div>
                  <div className="info-row" style={{ fontSize: 13 }}><span>Saved</span><strong>${goal.saved.toLocaleString()} / ${goal.target.toLocaleString()}</strong></div>
                  <div className="info-row" style={{ fontSize: 13 }}><span>Needed monthly</span><strong>${monthly.toLocaleString()}</strong></div>
                </article>
              );
            })}
          </section>
        </div>
      </section>
      <BottomNav active="Goals" />
    </main>
  );
}

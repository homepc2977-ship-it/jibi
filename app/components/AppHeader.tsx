export function AppHeader({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <header className="top-bar">
      <a href="/" className="logo" style={{ textDecoration: "none" }}>
        <div className="logo-mark">J</div>
        <div>
          <span className="logo-title">JIBI</span>
          <span className="logo-subtitle">Safe money before payday</span>
        </div>
      </a>
      <button type="button" className="icon-button" aria-label="Add">+</button>
      {title ? <div style={{ display: "none" }}>{title}</div> : null}
      {subtitle ? <div style={{ display: "none" }}>{subtitle}</div> : null}
    </header>
  );
}

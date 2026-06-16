const navItems = [
  { label: "Home", icon: "Home", href: "/" },
  { label: "Budget", icon: "Budget", href: "/budget" },
  { label: "Calendar", icon: "Calendar", href: "/calendar" },
  { label: "Goals", icon: "Goals", href: "/goals" },
  { label: "Split", icon: "Split", href: "/split" },
];

export function BottomNav({ active }: { active: string }) {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <a key={item.href} href={item.href} className={active === item.label ? "active" : ""}>
          <span>{item.icon}</span>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

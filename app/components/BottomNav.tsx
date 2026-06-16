import Link from "next/link";

const navItems = [
  { label: "Home", icon: "⌂", href: "/" },
  { label: "Budget", icon: "$", href: "/budget" },
  { label: "Calendar", icon: "□", href: "/calendar" },
  { label: "Goals", icon: "◇", href: "/goals" },
  { label: "Split", icon: "+", href: "/split" },
];

export function BottomNav({ active }: { active: string }) {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className={active === item.label ? "active" : ""}>
          <span>{item.icon}</span>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

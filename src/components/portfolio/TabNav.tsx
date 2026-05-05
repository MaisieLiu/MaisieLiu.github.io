import { motion } from "framer-motion";

export type TabKey = "home" | "about" | "work" | "interests";

const TABS: { key: TabKey; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "work", label: "Work" },
  { key: "interests", label: "Hobbies" },
  { key: "about", label: "About" },
];

interface Props {
  active: TabKey;
  onChange: (next: TabKey) => void;
}

const TabNav = ({ active, onChange }: Props) => {
  return (
    <nav
      aria-label="Section tabs"
      className="mt-8 flex justify-center"
    >
      <ul className="flex flex-wrap items-end justify-center gap-1 sm:gap-2 border-b-2 border-dashed border-border pb-1">
        {TABS.map((t) => {
          const isActive = active === t.key;
          return (
            <li key={t.key} className="relative">
              <button
                type="button"
                onClick={() => onChange(t.key)}
                className={`relative px-4 sm:px-6 py-2 font-hand text-2xl sm:text-3xl transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {t.label}
                {isActive && (
                  <motion.span
                    layoutId="tab-tape"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-12 rounded-sm"
                    style={{
                      background:
                        "repeating-linear-gradient(45deg, hsl(var(--tape) / 0.9), hsl(var(--tape) / 0.9) 6px, hsl(var(--tape) / 0.55) 6px, hsl(var(--tape) / 0.55) 12px)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TabNav;

import { useEffect, useState } from "react";
import Header from "@/components/portfolio/Header";
import TabNav, { TabKey } from "@/components/portfolio/TabNav";
import HomeTab from "@/components/portfolio/tabs/HomeTab";
import AboutTab from "@/components/portfolio/tabs/AboutTab";
import WorkTab from "@/components/portfolio/tabs/WorkTab";
import InterestsTab from "@/components/portfolio/tabs/InterestsTab";
import IntroScreen from "@/components/IntroScreen";
import { AnimatePresence, motion } from "framer-motion";

const VALID_TABS: TabKey[] = ["home", "about", "work", "interests"];

const getTabFromHash = (): TabKey => {
  const raw = window.location.hash.replace(/^#\/?/, "").toLowerCase();
  return (VALID_TABS as string[]).includes(raw) ? (raw as TabKey) : "home";
};

const Index = () => {
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem("intro-seen");
  });

  const [tab, setTab] = useState<TabKey>(() =>
    typeof window !== "undefined" ? getTabFromHash() : "home"
  );

  useEffect(() => {
    document.title = "Maisie Liu — Data Analyst & Project Manager";
    const desc = "Maisie Liu's portfolio — data analyst, BI specialist, and curious explorer.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    const onHash = () => setTab(getTabFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const handleTab = (next: TabKey) => {
    window.location.hash = `/${next}`;
    setTab(next);
  };

  const handleIntroDone = () => {
    sessionStorage.setItem("intro-seen", "1");
    setShowIntro(false);
  };

  if (showIntro) {
    return <IntroScreen onDone={handleIntroDone} />;
  }

  return (
    <main className="min-h-screen w-full">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Header />
        <TabNav active={tab} onChange={handleTab} />

        <section className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {tab === "home" && <HomeTab />}
              {tab === "about" && <AboutTab />}
              {tab === "work" && <WorkTab />}
              {tab === "interests" && <InterestsTab />}
            </motion.div>
          </AnimatePresence>
        </section>

        <footer className="mt-16 pb-6 text-center text-sm text-muted-foreground font-note">
          made with curiosity & matcha · © {new Date().getFullYear()} Maisie Liu
        </footer>
      </div>
    </main>
  );
};

export default Index;

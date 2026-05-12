import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  onDone: () => void;
}

const COLORS = ["#C4855A", "#D4A027", "#7A9E6E", "#D4908A", "#C4A882", "#A07850"];

const IntroScreen = ({ onDone }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const runningRef = useRef(true);
  const [fillWelcome, setFillWelcome] = useState(false);
  const [fillDatabase, setFillDatabase] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [subWords, setSubWords] = useState([false, false, false, false, false]);
  const [fading, setFading] = useState(false);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = wrap.offsetWidth;
      canvas.height = wrap.offsetHeight;
    };
    resize();

    const W = () => canvas.width;
    const H = () => canvas.height;

    type Node = { x: number; y: number; r: number; color: string };
    type Edge = [number, number];
    type Pulse = { edge: Edge; t: number; color: string };

    const nodes: Node[] = [];
    const edges: Edge[] = [];
    const pulses: Pulse[] = [];

    for (let i = 0; i < 30; i++) {
      nodes.push({
        x: 30 + Math.random() * (W() - 60),
        y: 30 + Math.random() * (H() - 60),
        r: 2.5 + Math.random() * 3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        if (Math.sqrt(dx * dx + dy * dy) < 155) edges.push([i, j]);
      }
    }

    let lastP = 0;
    const spawnPulse = (t: number) => {
      if (t - lastP > 350 && edges.length) {
        const e = edges[Math.floor(Math.random() * edges.length)];
        pulses.push({ edge: e, t: 0, color: nodes[e[0]].color });
        lastP = t;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W(), H());
      edges.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = "rgba(180,130,80,0.13)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });
      pulses.forEach((p) => {
        const [i, j] = p.edge;
        const px = nodes[i].x + (nodes[j].x - nodes[i].x) * p.t;
        const py = nodes[i].y + (nodes[j].y - nodes[i].y) * p.t;
        const alpha = Math.max(0, 1 - Math.abs(p.t - 0.5) * 1.6);
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = alpha * 0.3;
        ctx.stroke();
        ctx.globalAlpha = 1;
      });
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = 0.55;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
    };

    let st: number | null = null;
    const frame = (ts: number) => {
      if (!st) st = ts;
      if (!runningRef.current) return;
      spawnPulse(ts - st);
      pulses.forEach((p) => (p.t += 0.013));
      for (let i = pulses.length - 1; i >= 0; i--) {
        if (pulses[i].t >= 1) pulses.splice(i, 1);
      }
      draw();
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);

    return () => { runningRef.current = false; };
  }, []);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => setFillWelcome(true), 2900));
    timers.push(setTimeout(() => setFillDatabase(true), 4300));
    timers.push(setTimeout(() => setShowSub(true), 4800));
    [0, 1, 2, 3, 4].forEach((i) => {
      timers.push(setTimeout(() => {
        setSubWords((prev) => { const n = [...prev]; n[i] = true; return n; });
      }, 4800 + i * 220));
    });
    timers.push(setTimeout(() => setShowSkip(true), 800));
    timers.push(setTimeout(() => triggerFade(), 7500));

    return () => timers.forEach(clearTimeout);
  }, []);

  const triggerFade = () => {
    runningRef.current = false;
    setFading(true);
    setTimeout(onDone, 1200);
  };

  const FONT = "'Segoe Script','Bradley Hand','Caveat','Comic Sans MS',cursive";

  return (
    <motion.div
      ref={wrapRef}
      style={{ background: "#FBF3E8" }}
      className="relative w-full h-screen flex items-center justify-center flex-col overflow-hidden"
      animate={{ opacity: fading ? 0 : 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.28 }} />

      <div className="relative z-10 text-center pointer-events-none">
        <svg viewBox="0 0 600 130" className="w-[580px] max-w-[96vw] block mx-auto">

          <text x="300" y="52" textAnchor="middle"
            fontFamily={FONT} fontSize="40"
            fill="#C4855A"
            opacity={fillWelcome ? 1 : 0}
            style={{ transition: "opacity 0.8s ease" }}
          >
            Welcome to
          </text>
          <text x="300" y="52" textAnchor="middle"
            fontFamily={FONT} fontSize="40"
            fill="none" stroke="#6B3A1F" strokeWidth="0.8"
            strokeDasharray="1200"
            strokeDashoffset="1200"
            style={{ transition: "stroke-dashoffset 2.4s ease-in-out", strokeDashoffset: "0" } as React.CSSProperties}
          >
            Welcome to
          </text>

          <text x="300" y="112" textAnchor="middle"
            fontFamily={FONT} fontSize="48"
            fill="#D4742A"
            opacity={fillDatabase ? 1 : 0}
            style={{ transition: "opacity 0.8s ease" }}
          >
            {"Maisie's Database"}
          </text>
          <text x="300" y="112" textAnchor="middle"
            fontFamily={FONT} fontSize="48"
            fill="none" stroke="#6B3A1F" strokeWidth="0.8"
            strokeDasharray="2000"
            strokeDashoffset="2000"
            style={{ transition: "stroke-dashoffset 3s ease-in-out 0.9s", strokeDashoffset: "0" } as React.CSSProperties}
          >
            {"Maisie's Database"}
          </text>

        </svg>

        <div
          className="mt-5 font-serif text-[13px] tracking-[0.2em] uppercase"
          style={{ color: "#C17A4A", opacity: showSub ? 1 : 0, transition: "opacity 0.5s ease" }}
        >
          {["Data Science", "·", "Business Intelligence", "·", "Project Management"].map((w, i) => (
            <span
              key={i}
              style={{
                opacity: subWords[i] ? 1 : 0,
                transition: "opacity 0.45s ease",
                margin: w === "·" ? "0 10px" : undefined,
                color: w === "·" ? "#D9C4A8" : undefined,
              }}
            >
              {w}
            </span>
          ))}
        </div>
      </div>

      {showSkip && (
        <button
          onClick={triggerFade}
          className="absolute bottom-4 right-5 text-xs font-sans z-20 hover:opacity-80 transition-opacity"
          style={{ color: "#C4A882" }}
        >
          skip ›
        </button>
      )}
    </motion.div>
  );
};

export default IntroScreen;

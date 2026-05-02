// Sticker placeholders. Drop your own PNG stickers into src/assets/stickers/
// then import them and add them to this list. Each sticker animates in on the Home tab.

export interface Sticker {
  /** short label shown if no image is available */
  label: string;
  /** optional emoji used as a friendly placeholder until you add an image */
  emoji?: string;
  /** optional imported image (e.g. import boba from "@/assets/stickers/boba.png") */
  src?: string;
  /** rough position as percentages (0–100). Tune to taste. */
  top: number;
  left: number;
  /** rotation in degrees */
  rotate: number;
  /** background tint for the placeholder bubble */
  tint: "mustard" | "sage" | "terracotta" | "dusty-pink" | "sky";
}

// TODO Maisie: replace these with real sticker images when ready.
// Example:
//   import boba from "@/assets/stickers/boba.png";
//   { label: "Boba", src: boba, top: 10, left: 8, rotate: -8, tint: "dusty-pink" }
export const STICKERS: Sticker[] = [
  { label: "Boba",        emoji: "🧋", top:  8, left:  6, rotate: -10, tint: "dusty-pink" },
  { label: "Matcha",      emoji: "🍵", top: 14, left: 82, rotate:   8, tint: "sage" },
  { label: "Taipei 101",  emoji: "🏙️", top: 55, left:  4, rotate:  -6, tint: "sky" },
  { label: "Bike",        emoji: "🚴‍♀️", top: 70, left: 78, rotate:   5, tint: "mustard" },
  { label: "Swim",        emoji: "🏊‍♀️", top: 30, left: 70, rotate: -12, tint: "sky" },
  { label: "Read",        emoji: "📚", top: 78, left: 30, rotate:   6, tint: "terracotta" },
  { label: "Dumplings",   emoji: "🥟", top: 40, left: 18, rotate:  10, tint: "mustard" },
  { label: "Camera",      emoji: "📷", top: 60, left: 50, rotate:  -4, tint: "dusty-pink" },
  { label: "Coffee",      emoji: "☕", top: 22, left: 42, rotate:   3, tint: "terracotta" },
];

// Sticker placeholders. Drop your own PNG stickers into src/assets/stickers/
// then import them and add them to this list. Each sticker animates in on the Home tab.

import me from "@/assets/stickers/me.png";
import meboba from "@/assets/stickers/meboba.png";
import travel from "@/assets/stickers/travel.png";
import bobaFriends from "@/assets/stickers/boba-friends.png";
import jam from "@/assets/stickers/jam.png";
import kitten from "@/assets/stickers/kitten.png";
import cat from "@/assets/stickers/cat.png";

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

// Emoji stickers (the originals) + photo stickers (your uploads).
// Tune top/left/rotate to taste — values are percentages of the collage box.
export const STICKERS: Sticker[] = [
  // ── Emoji stickers ──────────────────────────────────────────────
  { label: "Boba",        emoji: "🧋",   top:  6, left: 18, rotate: -10, tint: "dusty-pink" },
  { label: "Matcha",      emoji: "🍵",   top: 10, left: 72, rotate:   8, tint: "sage" },
  { label: "Taipei 101",  emoji: "🏙️",  top: 70, left:  2, rotate:  -6, tint: "sky" },
  { label: "Bike",        emoji: "🚴‍♀️", top: 78, left: 88, rotate:   5, tint: "mustard" },
  { label: "Swim",        emoji: "🏊‍♀️", top: 28, left: 88, rotate: -12, tint: "sky" },
  { label: "Read",        emoji: "📚",   top: 86, left: 40, rotate:   6, tint: "terracotta" },
  { label: "Dumplings",   emoji: "🥟",   top: 50, left:  2, rotate:  10, tint: "mustard" },
  { label: "Camera",      emoji: "📷",   top: 84, left: 60, rotate:  -4, tint: "dusty-pink" },
  { label: "Coffee",      emoji: "☕",   top:  4, left: 46, rotate:   3, tint: "terracotta" },

  // ── Photo stickers (your uploads) ───────────────────────────────
  { label: "Me",              src: me,           top: 50, left: 72, rotate:   5, tint: "sage" },
  { label: "Travel days",     src: travel,       top: 52, left: 22, rotate:  -6, tint: "mustard" },
  { label: "Boba & friends",  src: bobaFriends,  top: 22, left:  4, rotate:   4, tint: "terracotta" },
  { label: "Homemade jam",    src: jam,          top: 70, left: 70, rotate:  -8, tint: "terracotta" },
  { label: "Kitten",          src: kitten,       top: 24, left: 56, rotate:   6, tint: "sky" },
  { label: "Cat",             src: cat,          top: 56, left: 50, rotate:  -3, tint: "sage" },
  { label: "Boba & I",        src: meboba,       top: 58, left: 40, rotate:   2, tint: "dusty-pink" }
];

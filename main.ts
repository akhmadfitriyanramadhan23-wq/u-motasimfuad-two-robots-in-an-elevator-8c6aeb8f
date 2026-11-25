import { mkdirSync, writeFileSync } from "node:fs";

// Two robots in an elevator: awkward small talk where the machine logic
// shows through. Three beats: the floor (setting), the exact 47 seconds
// (a robot counts), and the small-talk module quitting on the spot —
// with a flat bureaucratic kicker, effective immediately.
const lines = [
  "Floor 12, huh? We've shared this box for 47 seconds and my small-talk module just filed for early retirement — effective immediately.",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-200 characters and exactly one line.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";

// The joke, beat by beat: a robot notices the floor number, then
// reports the shared ride with stopwatch precision (47 seconds),
// then its small-talk module hands in its notice — filed, like
// paperwork, for early retirement, effective immediately.
const joke =
  "Floor 12, huh? We've shared this box for 47 seconds and my small-talk module just filed for early retirement — effective immediately.";

// The gate counts characters as code points, so count the same way.
const MAX_CHARS = 200;
const charCount = [...joke].length;
if (charCount < 1) {
  throw new Error(`entry is empty, need at least 1 character`);
}
if (charCount > MAX_CHARS) {
  throw new Error(`entry is ${charCount} characters, over the ${MAX_CHARS} limit`);
}

// One line only: no line breaks hiding inside the entry.
if (joke.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (joke.trim().length === 0) {
  throw new Error("entry must not be blank");
}

const payload = joke + "\n";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", payload, "utf8");

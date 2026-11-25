// Fortune Cookie Wisdom for Developers — v2 entry.
// The program writes a single original fortune-cookie line for a
// software developer to /output/entry.txt, where the judge reads it.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const FORTUNE_LINE =
  "The bug you cannot reproduce has already reproduced itself in production.";

function destination(): string {
  return join("/output", "entry.txt");
}

const target = destination();

// The gate accepts 1 to 120 characters: refuse to write anything
// outside that window rather than shipping an invalid entry.
if (FORTUNE_LINE.length < 1 || FORTUNE_LINE.length > 120) {
  throw new Error(
    `fortune line must be 1-120 characters, got ${FORTUNE_LINE.length}`,
  );
}

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, FORTUNE_LINE, "utf8");

// SPDX-License-Identifier: MIT
// Make the AI Judge Laugh — u-alfasurya91-make-the-ai-judge-laugh-6ed40225
// Writes a single office-life joke (one line, under 200 chars) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I hit reply-all to ask to be removed from the thread, and now fifty coworkers email me daily asking how to escape it too.";

// Gate: single line, 1-199 chars, non-blank (brief: under 200 characters).
if (!ENTRY || !ENTRY.trim()) {
  throw new Error("Entry must not be blank.");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line.");
}
if (ENTRY.length < 1 || ENTRY.length > 199) {
  throw new Error(`Entry must be 1-199 chars, got ${ENTRY.length}.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars): ${ENTRY}`);

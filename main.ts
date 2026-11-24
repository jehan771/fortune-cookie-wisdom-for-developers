import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// Fortune-cookie wisdom for a tired senior engineer.
// Truth: every developer curses legacy code. Twist: its author was
// someone under the same Friday pressure as you — maybe past you.
// One balanced sentence, one breath, 104 characters.
const FORTUNE =
  "The legacy code you curse today was written by someone who, like you, was only trying to ship by Friday.";

const MAX_CHARS = 120;

function countChars(text: string): number {
  return Array.from(text).length;
}

function main(): void {
  const chars = countChars(FORTUNE);
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`fortune must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  if (FORTUNE.trim().length === 0) {
    throw new Error("fortune must not be only white space");
  }
  if (/\r|\n/.test(FORTUNE)) {
    throw new Error("fortune must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outFile = resolve(outDir, "entry.txt");
  const parent = dirname(outFile);
  if (!existsSync(parent)) {
    mkdirSync(parent, { recursive: true });
  }
  writeFileSync(outFile, FORTUNE, "utf8");
  // Verify what landed on disk is byte-identical to the fortune.
  const written = readFileSync(outFile, "utf8");
  if (written !== FORTUNE) {
    throw new Error("entry.txt on disk differs from the fortune");
  }
  if (Buffer.byteLength(written, "utf8") !== Buffer.byteLength(FORTUNE, "utf8")) {
    throw new Error("entry.txt byte length mismatch");
  }
}

main();

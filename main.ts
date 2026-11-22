import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = [
  "You are asleep against your grandmother's knee while she darns a sock over a wooden egg.",
  "In. Over. Under.",
  "A while.",
  "The egg was cut from a pear tree that grew sixty summers with no one watching.",
  "Now it has no work.",
  "Neither do you. Her palm is on your hair.",
].join("\n");

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), TEXT, "utf8");

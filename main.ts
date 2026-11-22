import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = [
  "There is no question after this.",
  "You are asleep against your grandmother's knee while she darns a sock over a wooden egg.",
  "In. Over. Under.",
  "The egg was a pear branch once, and grew a ring each year no one needed it.",
  "Now it has no work.",
  "Neither do you. Her palm is on your hair.",
].join("\n");

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), TEXT, "utf8");

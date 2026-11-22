import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = [
  "There is no question after this.",
  "By the fire, a grandmother darns a sock over a wooden egg.",
  "The egg keeps the heel's shape, so her needle can go slow.",
  "In. Over. Under.",
  "She is not finishing. She is only mending.",
  "The egg has no work.",
  "It is held, all evening, in a warm hand.",
].join("\n");

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), TEXT, "utf8");

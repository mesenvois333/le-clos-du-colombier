import { readFileSync } from "fs";
import { join } from "path";

const dataDir = join(process.cwd(), "data");

function readJson<T>(filename: string): T {
  return JSON.parse(readFileSync(join(dataDir, filename), "utf-8"));
}

export function getContent(section: string): Record<string, string> {
  const all = readJson<Record<string, Record<string, string>>>("content.json");
  return all[section] || {};
}

export function getAllContent(): Record<string, Record<string, string>> {
  return readJson("content.json");
}

export function getLists(): Record<string, unknown[]> {
  return readJson("lists.json");
}

export function getImages(): Record<string, string | string[]> {
  return readJson("images.json");
}

export function getFooterProps() {
  return { footer: getContent("footer"), contact: getContent("contact") };
}

import { BRAND } from "../constants/brand";

export const cn = (...xs) => xs.filter(Boolean).join(" ");

export function runSanityChecks() {
  console.assert(typeof BRAND.name === "string" && BRAND.name.length > 0, "BRAND.name missing");
  console.assert(/^#([0-9a-fA-F]{6})$/.test(BRAND.primary), "BRAND.primary should be a hex color");
}

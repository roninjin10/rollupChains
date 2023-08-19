import { defineConfig } from "tsup";

export default defineConfig({
  name: "@gateway/common-ts",
  entry: ["src/rollupChains.ts"],
  outDir: "dist",
  format: ["esm", "cjs"],
  splitting: false,
  sourcemap: true,
  clean: true
});

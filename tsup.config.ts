import { defineConfig } from "tsup";

export default defineConfig({
  name: "@gateway/common-ts",
  entry: ["src/l2Chains.ts"],
  outDir: "dist",
  format: ["esm", "cjs"],
  splitting: false,
  sourcemap: true,
  clean: true,
});

import { it, expect } from "vitest";
import * as rollupChains from "./rollupChains";
import * as wagmiChains from "@wagmi/chains";

it("should extend wagmi", () => {
  expect(rollupChains.optimismGoerli).toMatchObject(wagmiChains.optimismGoerli);
  expect(rollupChains.optimism).toMatchObject(wagmiChains.optimism);
  expect(rollupChains.mainnet).toMatchObject(wagmiChains.mainnet);
  expect(rollupChains.goerli).toMatchObject(wagmiChains.goerli);
});

it("should have l1 prop", () => {
  expect(rollupChains.optimismGoerli.l1).toBe(wagmiChains.goerli);
  expect(rollupChains.optimism.l1).toBe(wagmiChains.mainnet);
  expect(rollupChains.mainnet.l1).toBe(wagmiChains.mainnet);
  expect(rollupChains.goerli.l1).toBe(wagmiChains.goerli);
});

it("should have l2 prop", () => {
  expect(rollupChains.optimismGoerli.l2).toBe(wagmiChains.optimismGoerli);
  expect(rollupChains.optimism.l2).toBe(wagmiChains.optimism);
  expect(rollupChains.mainnet.l2).toBe(wagmiChains.optimism);
  expect(rollupChains.goerli.l2).toBe(wagmiChains.optimismGoerli);
});

it("should have isL1 prop", () => {
  expect(rollupChains.optimismGoerli.isL1).toBe(false);
  expect(rollupChains.optimism.isL1).toBe(false);
  expect(rollupChains.mainnet.isL1).toBe(true);
  expect(rollupChains.goerli.isL1).toBe(true);
});

it("should have isL2 prop", () => {
  expect(rollupChains.optimismGoerli.isL2).toBe(true);
  expect(rollupChains.optimism.isL2).toBe(true);
  expect(rollupChains.mainnet.isL2).toBe(false);
  expect(rollupChains.goerli.isL2).toBe(false);
});

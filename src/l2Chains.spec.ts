import { it, expect } from "vitest";
import * as rollupChains from "./l2Chains";
import * as wagmiChains from "wagmi/chains";

it("should extend wagmi", () => {
  expect(rollupChains.optimismGoerli).toMatchObject(wagmiChains.optimismGoerli);
  expect(rollupChains.optimism).toMatchObject(wagmiChains.optimism);
  expect(rollupChains.mainnet).toMatchObject(wagmiChains.mainnet);
  expect(rollupChains.goerli).toMatchObject(wagmiChains.goerli);
});

it("should have l1 prop", () => {
  expect(rollupChains.optimismGoerli.l1).toBe(rollupChains.goerli);
  expect(rollupChains.optimism.l1).toBe(rollupChains.mainnet);
  expect(rollupChains.mainnet.l1).toBe(rollupChains.mainnet);
  expect(rollupChains.goerli.l1).toBe(rollupChains.goerli);
});

it("should have l2 prop", () => {
  expect(rollupChains.optimismGoerli.l2).toBe(rollupChains.optimismGoerli);
  expect(rollupChains.optimism.l2).toBe(rollupChains.optimism);
  expect(rollupChains.mainnet.l2).toBe(rollupChains.optimism);
  expect(rollupChains.goerli.l2).toBe(rollupChains.optimismGoerli);
});

it("should have isL1Chain prop", () => {
  expect(rollupChains.optimismGoerli.isL1Chain).toBe(false);
  expect(rollupChains.optimism.l1.isL1Chain).toBe(true);
  expect(rollupChains.mainnet.isL1Chain).toBe(true);
  expect(rollupChains.goerli.isL1Chain).toBe(true);
});

it("should have isL2Chain prop", () => {
  expect(rollupChains.optimismGoerli.isL2Chain).toBe(true);
  expect(rollupChains.optimism.isL2Chain).toBe(true);
  expect(rollupChains.mainnet.isL2Chain).toBe(false);
  expect(rollupChains.goerli.isL2Chain).toBe(false);
});

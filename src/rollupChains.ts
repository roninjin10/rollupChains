import { Chain } from "wagmi";
import {
  mainnet as wagmiMainnet,
  optimism as wagmiOptimism,
  goerli as wagmiGoerli,
  optimismGoerli as wagmiOptimismGoerli,
} from "wagmi/chains";
/**
 * L2 chain interface
 * @extends Chain
 * Represents a L1 L2 chain pairing
 * Helpful for abstracting away which chain
 * the user is currently connected to
 * @example
 * // instead of this
 * const l1ChainId = chain.id === 1 ? 1 : 10
 * // write it more declaritively like this
 * const l1ChainId = chain.l1.id;
 */
export type RollupChain = Chain & {
  /**
   * The L1 chain in the L1 L2 chain pairing
   */
  l1: RollupChain;
  /**
   * The L2 chain in the L1 L2 chain pairing
   */
  l2: RollupChain;
  /**
   * True if the chain is an L1 chain
   */
  isL1Chain: boolean;
  /*
   * True if the chain is an L2 chain
   */
  isL2Chain: boolean;
  /**
   * A JSON serializable version of the chain object
   */
  serializable: Chain & {
    l1: Chain;
    l2: Chain;
    isL1Chain: boolean;
    isL2Chain: boolean;
  };
};

/**
 * A more generic rollup chain interface that supports
 * multiple L2 chains connected to the same l1 chain
 */
// export type MultiRollupChain = Chain & {
//   l1: MultiRollupChain;
//   l2s: Record<number, MultiRollupChain>;
// };

export const mainnet = {
  ...wagmiMainnet,
  get l1() {
    return mainnet;
  },
  get l2() {
    return optimism;
  },
  isL1Chain: true,
  isL2Chain: false,
  serializable: {
    ...wagmiMainnet,
    l1: wagmiMainnet,
    l2: wagmiOptimism,
    isL1Chain: true,
    isL2Chain: false,
  },
} as const satisfies RollupChain;

export const optimism = {
  ...wagmiOptimism,
  get l1() {
    return mainnet;
  },
  get l2() {
    return optimism;
  },
  serializable: {
    ...wagmiOptimism,
    l1: wagmiMainnet,
    l2: wagmiOptimism,
    isL1Chain: false,
    isL2Chain: true,
  },
  isL1Chain: false,
  isL2Chain: true,
} as const satisfies RollupChain;

export const goerli = {
  ...wagmiGoerli,
  get l1() {
    return goerli;
  },
  get l2() {
    return optimismGoerli;
  },
  serializable: {
    ...wagmiGoerli,
    l1: wagmiGoerli,
    l2: wagmiOptimismGoerli,
    isL1Chain: true,
    isL2Chain: false,
  },
  isL1Chain: true,
  isL2Chain: false,
} as const satisfies RollupChain;

export const optimismGoerli = {
  ...wagmiOptimismGoerli,
  get l1() {
    return goerli;
  },
  get l2() {
    return optimismGoerli;
  },
  serializable: {
    ...wagmiOptimismGoerli,
    l1: wagmiGoerli,
    l2: wagmiOptimismGoerli,
    isL1Chain: false,
    isL2Chain: true,
  },
  isL1Chain: false,
  isL2Chain: true,
} as const satisfies RollupChain;
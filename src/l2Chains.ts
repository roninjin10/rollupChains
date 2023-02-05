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
  l1: RollupChain;
  l2: RollupChain;
  isL1Chain: boolean;
  isL2Chain: boolean;
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
} as const satisfies RollupChain;

export const optimism = {
  ...wagmiOptimism,
  get l1() {
    return mainnet;
  },
  get l2() {
    return optimism;
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
  isL1Chain: false,
  isL2Chain: true,
} as const satisfies RollupChain;

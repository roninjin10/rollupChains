import { Chain } from "@wagmi/chains";
import {
  mainnet as wagmiMainnet,
  optimism as wagmiOptimism,
  goerli as wagmiGoerli,
  optimismGoerli as wagmiOptimismGoerli,
} from "@wagmi/chains";

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
  l1: Chain;
  /**
   * The L2 chain in the L1 L2 chain pairing
   */
  l2: Chain;
  /**
   * True if the chain is an L1 chain
   */
  isL1: boolean;
  /*
   * True if the chain is an L2 chain
   */
  isL2: boolean;
};

export const mainnet = {
  ...wagmiMainnet,
  l1: wagmiMainnet,
  l2: wagmiOptimism,
  isL1: true,
  isL2: false,
} as const satisfies RollupChain;

export const optimism = {
  ...wagmiOptimism,
  l1: wagmiMainnet,
  l2: wagmiOptimism,
  isL1: false,
  isL2: true,
} as const satisfies RollupChain;

export const goerli = {
  ...wagmiGoerli,
  l1: wagmiGoerli,
  l2: wagmiOptimismGoerli,
  isL1: true,
  isL2: false,
} as const satisfies RollupChain;

export const optimismGoerli = {
  ...wagmiOptimismGoerli,
  l1: wagmiGoerli,
  l2: wagmiOptimismGoerli,
  isL1: false,
  isL2: true,
} as const satisfies RollupChain;

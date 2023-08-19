import type { Chain } from "@wagmi/chains";
import {
  mainnet as wagmiMainnet,
  optimism as wagmiOptimism,
  goerli as wagmiGoerli,
  optimismGoerli as wagmiOptimismGoerli,
  zora as wagmiZora,
  zoraTestnet as wagmiZoraTestnet,
  base as wagmiBase,
  baseGoerli as wagmiBaseGoerli,
} from "@wagmi/chains";

type Address = `0x${string}`

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
export type OpChain = Chain & {
  isOpChain: boolean,
  isSuperchain: boolean,
  /**
   * The L1 chain in the L1 L2 chain pairing
   */
  l1: Chain;
  /**
   * True if the chain is an L1 chain
   */
  isL1: boolean;
  /*
   * True if the chain is an L2 chain
   */
  isL2: boolean;
};

/**
 * OP Chain that is l1
 */
export type OpChainL1 = OpChain & {
  /**
   * The L2 chain in the L1 L2 chain pairing
   */
  l2s: OpChainL2[]
  isL1: true;
  isL2: false;
}

/**
 * OP Chain that is l2
 */
export type OpChainL2 = OpChain & {
  isL1: false;
  isL2: true;
  /**
   * L1 Contract addresses
   */
  opContracts: {
    OptimismPortalProxy: Address,
    L2OutputOracleProxy: Address,
    L1CrossDomainMessengerProxy: Address,
    L1StandardBridgeProxy: Address,
  },
}

export const mainnet = {
  ...wagmiMainnet,
  isOpChain: true,
  isSuperchain: true,
  l1: wagmiMainnet,
  get l2s(): OpChainL2[] {
    return [optimism, base, zora]
  },
  isL1: true,
  isL2: false,
} as const satisfies OpChainL1;

export const optimism = {
  ...wagmiOptimism,
  opContracts: {
    OptimismPortalProxy: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed",
    L2OutputOracleProxy: "0xdfe97868233d1aa22e815a266982f2cf17685a27",
    L1CrossDomainMessengerProxy: "0x25ace71c97B33Cc4729CF772ae268934F7ab5fA1",
    L1StandardBridgeProxy: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1",
  },
  isOpChain: true,
  isSuperchain: true,
  l1: wagmiMainnet,
  isL1: false,
  isL2: true,
} as const satisfies OpChainL2;

export const base = {
  ...wagmiBase,
  isOpChain: true,
  isSuperchain: true,
  l1: wagmiMainnet,
  isL1: false,
  isL2: true,
  opContracts: {
    OptimismPortalProxy: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
    L2OutputOracleProxy: "0x56315b90c40730925ec5485cf004d835058518A0",
    L1CrossDomainMessengerProxy: "0x866E82a600A1414e583f7F13623F1aC5d58b0Afa",
    L1StandardBridgeProxy: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
  },
} as const satisfies OpChainL2;

export const zora = {
  ...wagmiZora,
  isOpChain: true,
  isSuperchain: true,
  l1: wagmiMainnet,
  isL1: false,
  isL2: true,
  opContracts: {
    OptimismPortalProxy: "0x1a0ad011913A150f69f6A19DF447A0CfD9551054",
    L2OutputOracleProxy: "0x9E6204F750cD866b299594e2aC9eA824E2e5f95c",
    L1CrossDomainMessengerProxy: "0xdC40a14d9abd6F410226f1E6de71aE03441ca506",
    L1StandardBridgeProxy: "0x3e2Ea9B92B7E48A52296fD261dc26fd995284631",
  },
} as const satisfies OpChainL2;

export const goerli = {
  ...wagmiGoerli,
  isOpChain: true,
  isSuperchain: true,
  l1: wagmiGoerli,
  get l2s() {
    return [optimismGoerli, baseGoerli, zoraGoerli]
  },
  isL1: true,
  isL2: false,
} as const satisfies OpChainL1;

export const optimismGoerli = {
  ...wagmiOptimismGoerli,
  isOpChain: true,
  isSuperchain: true,
  l1: wagmiGoerli,
  isL1: false,
  isL2: true,
  opContracts: {
    OptimismPortalProxy: "0x5b47E1A08Ea6d985D6649300584e6722Ec4B1383",
    L2OutputOracleProxy: "0xE6Dfba0953616Bacab0c9A8ecb3a9BBa77FC15c0",
    L1CrossDomainMessengerProxy: "0x5086d1eEF304eb5284A0f6720f79403b4e9bE294",
    L1StandardBridgeProxy: "0x636Af16bf2f682dD3109e60102b8E1A089FedAa8",
  },
} as const satisfies OpChainL2;

export const baseGoerli = {
  ...wagmiBaseGoerli,
  isOpChain: true,
  isSuperchain: true,
  l1: wagmiGoerli,
  isL1: false,
  isL2: true,
  opContracts: {
    OptimismPortalProxy: "0xe93c8cD0D409341205A592f8c4Ac1A5fe5585cfA",
    L2OutputOracleProxy: "0x2A35891ff30313CcFa6CE88dcf3858bb075A2298",
    L1CrossDomainMessengerProxy: "0x8e5693140eA606bcEB98761d9beB1BC87383706D",
    L1StandardBridgeProxy: "0xfA6D8Ee5BE770F84FC001D098C4bD604Fe01284a",
  },
} as const satisfies OpChainL2;

export const zoraGoerli = {
  ...wagmiZoraTestnet,
  isOpChain: true,
  isSuperchain: true,
  l1: wagmiGoerli,
  isL1: false,
  isL2: true,
  opContracts: {
    OptimismPortalProxy: "0xDb9F51790365e7dc196e7D072728df39Be958ACe",
    L2OutputOracleProxy: "0xdD292C9eEd00f6A32Ff5245d0BCd7f2a15f24e00",
    L1CrossDomainMessengerProxy: "0xD87342e16352D33170557A7dA1e5fB966a60FafC",
    L1StandardBridgeProxy: "0x7CC09AC2452D6555d5e0C213Ab9E2d44eFbFc956",
  },
} as const satisfies OpChainL2;

export const allChains = [wagmiMainnet, wagmiGoerli, wagmiOptimism, wagmiBase, wagmiZora, wagmiOptimismGoerli, wagmiBaseGoerli, wagmiZoraTestnet] as const;

export const l1Chains = [wagmiMainnet, wagmiGoerli] as const;

export const l2Chains = [wagmiOptimism, wagmiBase, wagmiZora, wagmiOptimismGoerli, wagmiBaseGoerli, wagmiZoraTestnet] as const;

export const l2MainnetChains = [wagmiOptimism, wagmiBase, wagmiZora] as const;

export const l2TestnetChains = [wagmiOptimismGoerli, wagmiBaseGoerli, wagmiZoraTestnet] as const;

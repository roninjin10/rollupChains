import { it, expect } from "vitest";
import * as rollupChains from "./rollupChains";
import * as wagmiChains from "@wagmi/chains";

it("should extend wagmi", () => {
  expect(rollupChains.mainnet).toMatchObject(wagmiChains.mainnet);
  expect(rollupChains.goerli).toMatchObject(wagmiChains.goerli);

  expect(rollupChains.optimism).toMatchObject(wagmiChains.optimism);
  expect(rollupChains.optimismGoerli).toMatchObject(wagmiChains.optimismGoerli);

  expect(rollupChains.base).toMatchObject(wagmiChains.base);
  expect(rollupChains.baseGoerli).toMatchObject(wagmiChains.baseGoerli);

  expect(rollupChains.zora).toMatchObject(wagmiChains.zora);
  expect(rollupChains.zoraGoerli).toMatchObject(wagmiChains.zoraTestnet);
});

it("should have l1 prop", () => {
  expect(rollupChains.mainnet.l1).toBe(wagmiChains.mainnet);
  expect(rollupChains.goerli.l1).toBe(wagmiChains.goerli);

  expect(rollupChains.optimism.l1).toBe(wagmiChains.mainnet);
  expect(rollupChains.optimismGoerli.l1).toBe(wagmiChains.goerli);

  expect(rollupChains.base.l1).toBe(wagmiChains.mainnet);
  expect(rollupChains.baseGoerli.l1).toBe(wagmiChains.goerli);

  expect(rollupChains.zora.l1).toBe(wagmiChains.mainnet);
  expect(rollupChains.zoraGoerli.l1).toBe(wagmiChains.goerli);
});

it("should have l2 prop", () => {
  expect(rollupChains.mainnet.l2s).toEqual([rollupChains.optimism, rollupChains.base, rollupChains.zora])
  expect(rollupChains.goerli.l2s).toEqual([rollupChains.optimismGoerli, rollupChains.baseGoerli, rollupChains.zoraGoerli])
});

it("should have isL1 prop", () => {
  expect(rollupChains.mainnet.isL1).toBe(true)
  expect(rollupChains.goerli.isL1).toBe(true)

  expect(rollupChains.optimism.isL1).toBe(false)
  expect(rollupChains.optimismGoerli.isL1).toBe(false)

  expect(rollupChains.base.isL1).toBe(false)
  expect(rollupChains.baseGoerli.isL1).toBe(false)

  expect(rollupChains.zora.isL1).toBe(false)
  expect(rollupChains.zoraGoerli.isL1).toBe(false)
});

it("should have isL2 prop", () => {
  expect(rollupChains.mainnet.isL2).toBe(false)
  expect(rollupChains.goerli.isL2).toBe(false)

  expect(rollupChains.optimism.isL2).toBe(true)
  expect(rollupChains.optimismGoerli.isL2).toBe(true)

  expect(rollupChains.base.isL2).toBe(true)
  expect(rollupChains.baseGoerli.isL2).toBe(true)

  expect(rollupChains.zora.isL2).toBe(true)
  expect(rollupChains.zoraGoerli.isL2).toBe(true)
});

it("should have an isOpChain prop", () => {
  expect(rollupChains.mainnet.isOpChain).toBe(true)
  expect(rollupChains.goerli.isOpChain).toBe(true)

  expect(rollupChains.optimism.isOpChain).toBe(true)
  expect(rollupChains.optimismGoerli.isOpChain).toBe(true)

  expect(rollupChains.base.isOpChain).toBe(true)
  expect(rollupChains.baseGoerli.isOpChain).toBe(true)

  expect(rollupChains.zora.isOpChain).toBe(true)
  expect(rollupChains.zoraGoerli.isOpChain).toBe(true)
})

it("should have an isSuperchain prop", () => {
  expect(rollupChains.mainnet.isSuperchain).toBe(true)
  expect(rollupChains.goerli.isSuperchain).toBe(true)

  expect(rollupChains.optimism.isSuperchain).toBe(true)
  expect(rollupChains.optimismGoerli.isSuperchain).toBe(true)

  expect(rollupChains.base.isSuperchain).toBe(true)
  expect(rollupChains.baseGoerli.isSuperchain).toBe(true)

  expect(rollupChains.zora.isSuperchain).toBe(true)
  expect(rollupChains.zoraGoerli.isSuperchain).toBe(true)
})

it("Should match the snapshot", () => {
  expect(rollupChains).toMatchInlineSnapshot(`
    {
      "base": {
        "blockExplorers": {
          "blockscout": {
            "name": "Basescout",
            "url": "https://base.blockscout.com",
          },
          "default": {
            "name": "Basescan",
            "url": "https://basescan.org",
          },
          "etherscan": {
            "name": "Basescan",
            "url": "https://basescan.org",
          },
        },
        "contracts": {
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 5022,
          },
        },
        "id": 8453,
        "isL1": false,
        "isL2": true,
        "isOpChain": true,
        "isSuperchain": true,
        "l1": {
          "blockExplorers": {
            "default": {
              "name": "Etherscan",
              "url": "https://etherscan.io",
            },
            "etherscan": {
              "name": "Etherscan",
              "url": "https://etherscan.io",
            },
          },
          "contracts": {
            "ensRegistry": {
              "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            },
            "ensUniversalResolver": {
              "address": "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
              "blockCreated": 16966585,
            },
            "multicall3": {
              "address": "0xca11bde05977b3631167028862be2a173976ca11",
              "blockCreated": 14353601,
            },
          },
          "id": 1,
          "name": "Ethereum",
          "nativeCurrency": {
            "decimals": 18,
            "name": "Ether",
            "symbol": "ETH",
          },
          "network": "homestead",
          "rpcUrls": {
            "alchemy": {
              "http": [
                "https://eth-mainnet.g.alchemy.com/v2",
              ],
              "webSocket": [
                "wss://eth-mainnet.g.alchemy.com/v2",
              ],
            },
            "default": {
              "http": [
                "https://cloudflare-eth.com",
              ],
            },
            "infura": {
              "http": [
                "https://mainnet.infura.io/v3",
              ],
              "webSocket": [
                "wss://mainnet.infura.io/ws/v3",
              ],
            },
            "public": {
              "http": [
                "https://cloudflare-eth.com",
              ],
            },
          },
        },
        "name": "Base",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Base",
          "symbol": "ETH",
        },
        "network": "base",
        "opContracts": {
          "L1CrossDomainMessengerProxy": "0x866E82a600A1414e583f7F13623F1aC5d58b0Afa",
          "L1StandardBridgeProxy": "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
          "L2OutputOracleProxy": "0x56315b90c40730925ec5485cf004d835058518A0",
          "OptimismPortalProxy": "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
        },
        "rpcUrls": {
          "default": {
            "http": [
              "https://mainnet.base.org",
            ],
          },
          "public": {
            "http": [
              "https://mainnet.base.org",
            ],
          },
        },
      },
      "baseGoerli": {
        "blockExplorers": {
          "default": {
            "name": "Basescan",
            "url": "https://goerli.basescan.org",
          },
          "etherscan": {
            "name": "Basescan",
            "url": "https://goerli.basescan.org",
          },
        },
        "contracts": {
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 1376988,
          },
        },
        "id": 84531,
        "isL1": false,
        "isL2": true,
        "isOpChain": true,
        "isSuperchain": true,
        "l1": {
          "blockExplorers": {
            "default": {
              "name": "Etherscan",
              "url": "https://goerli.etherscan.io",
            },
            "etherscan": {
              "name": "Etherscan",
              "url": "https://goerli.etherscan.io",
            },
          },
          "contracts": {
            "ensRegistry": {
              "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            },
            "ensUniversalResolver": {
              "address": "0x56522D00C410a43BFfDF00a9A569489297385790",
              "blockCreated": 8765204,
            },
            "multicall3": {
              "address": "0xca11bde05977b3631167028862be2a173976ca11",
              "blockCreated": 6507670,
            },
          },
          "id": 5,
          "name": "Goerli",
          "nativeCurrency": {
            "decimals": 18,
            "name": "Goerli Ether",
            "symbol": "ETH",
          },
          "network": "goerli",
          "rpcUrls": {
            "alchemy": {
              "http": [
                "https://eth-goerli.g.alchemy.com/v2",
              ],
              "webSocket": [
                "wss://eth-goerli.g.alchemy.com/v2",
              ],
            },
            "default": {
              "http": [
                "https://rpc.ankr.com/eth_goerli",
              ],
            },
            "infura": {
              "http": [
                "https://goerli.infura.io/v3",
              ],
              "webSocket": [
                "wss://goerli.infura.io/ws/v3",
              ],
            },
            "public": {
              "http": [
                "https://rpc.ankr.com/eth_goerli",
              ],
            },
          },
          "testnet": true,
        },
        "name": "Base Goerli",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Base Goerli",
          "symbol": "ETH",
        },
        "network": "base-goerli",
        "opContracts": {
          "L1CrossDomainMessengerProxy": "0x8e5693140eA606bcEB98761d9beB1BC87383706D",
          "L1StandardBridgeProxy": "0xfA6D8Ee5BE770F84FC001D098C4bD604Fe01284a",
          "L2OutputOracleProxy": "0x2A35891ff30313CcFa6CE88dcf3858bb075A2298",
          "OptimismPortalProxy": "0xe93c8cD0D409341205A592f8c4Ac1A5fe5585cfA",
        },
        "rpcUrls": {
          "default": {
            "http": [
              "https://goerli.base.org",
            ],
          },
          "public": {
            "http": [
              "https://goerli.base.org",
            ],
          },
        },
        "testnet": true,
      },
      "goerli": {
        "blockExplorers": {
          "default": {
            "name": "Etherscan",
            "url": "https://goerli.etherscan.io",
          },
          "etherscan": {
            "name": "Etherscan",
            "url": "https://goerli.etherscan.io",
          },
        },
        "contracts": {
          "ensRegistry": {
            "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          "ensUniversalResolver": {
            "address": "0x56522D00C410a43BFfDF00a9A569489297385790",
            "blockCreated": 8765204,
          },
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 6507670,
          },
        },
        "id": 5,
        "isL1": true,
        "isL2": false,
        "isOpChain": true,
        "isSuperchain": true,
        "l1": {
          "blockExplorers": {
            "default": {
              "name": "Etherscan",
              "url": "https://goerli.etherscan.io",
            },
            "etherscan": {
              "name": "Etherscan",
              "url": "https://goerli.etherscan.io",
            },
          },
          "contracts": {
            "ensRegistry": {
              "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            },
            "ensUniversalResolver": {
              "address": "0x56522D00C410a43BFfDF00a9A569489297385790",
              "blockCreated": 8765204,
            },
            "multicall3": {
              "address": "0xca11bde05977b3631167028862be2a173976ca11",
              "blockCreated": 6507670,
            },
          },
          "id": 5,
          "name": "Goerli",
          "nativeCurrency": {
            "decimals": 18,
            "name": "Goerli Ether",
            "symbol": "ETH",
          },
          "network": "goerli",
          "rpcUrls": {
            "alchemy": {
              "http": [
                "https://eth-goerli.g.alchemy.com/v2",
              ],
              "webSocket": [
                "wss://eth-goerli.g.alchemy.com/v2",
              ],
            },
            "default": {
              "http": [
                "https://rpc.ankr.com/eth_goerli",
              ],
            },
            "infura": {
              "http": [
                "https://goerli.infura.io/v3",
              ],
              "webSocket": [
                "wss://goerli.infura.io/ws/v3",
              ],
            },
            "public": {
              "http": [
                "https://rpc.ankr.com/eth_goerli",
              ],
            },
          },
          "testnet": true,
        },
        "l2s": [
          {
            "blockExplorers": {
              "default": {
                "name": "Etherscan",
                "url": "https://goerli-optimism.etherscan.io",
              },
              "etherscan": {
                "name": "Etherscan",
                "url": "https://goerli-optimism.etherscan.io",
              },
            },
            "contracts": {
              "multicall3": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 49461,
              },
            },
            "id": 420,
            "isL1": false,
            "isL2": true,
            "isOpChain": true,
            "isSuperchain": true,
            "l1": {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://goerli.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://goerli.etherscan.io",
                },
              },
              "contracts": {
                "ensRegistry": {
                  "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                },
                "ensUniversalResolver": {
                  "address": "0x56522D00C410a43BFfDF00a9A569489297385790",
                  "blockCreated": 8765204,
                },
                "multicall3": {
                  "address": "0xca11bde05977b3631167028862be2a173976ca11",
                  "blockCreated": 6507670,
                },
              },
              "id": 5,
              "name": "Goerli",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Goerli Ether",
                "symbol": "ETH",
              },
              "network": "goerli",
              "rpcUrls": {
                "alchemy": {
                  "http": [
                    "https://eth-goerli.g.alchemy.com/v2",
                  ],
                  "webSocket": [
                    "wss://eth-goerli.g.alchemy.com/v2",
                  ],
                },
                "default": {
                  "http": [
                    "https://rpc.ankr.com/eth_goerli",
                  ],
                },
                "infura": {
                  "http": [
                    "https://goerli.infura.io/v3",
                  ],
                  "webSocket": [
                    "wss://goerli.infura.io/ws/v3",
                  ],
                },
                "public": {
                  "http": [
                    "https://rpc.ankr.com/eth_goerli",
                  ],
                },
              },
              "testnet": true,
            },
            "name": "Optimism Goerli",
            "nativeCurrency": {
              "decimals": 18,
              "name": "Goerli Ether",
              "symbol": "ETH",
            },
            "network": "optimism-goerli",
            "opContracts": {
              "L1CrossDomainMessengerProxy": "0x5086d1eEF304eb5284A0f6720f79403b4e9bE294",
              "L1StandardBridgeProxy": "0x636Af16bf2f682dD3109e60102b8E1A089FedAa8",
              "L2OutputOracleProxy": "0xE6Dfba0953616Bacab0c9A8ecb3a9BBa77FC15c0",
              "OptimismPortalProxy": "0x5b47E1A08Ea6d985D6649300584e6722Ec4B1383",
            },
            "rpcUrls": {
              "alchemy": {
                "http": [
                  "https://opt-goerli.g.alchemy.com/v2",
                ],
                "webSocket": [
                  "wss://opt-goerli.g.alchemy.com/v2",
                ],
              },
              "default": {
                "http": [
                  "https://goerli.optimism.io",
                ],
              },
              "infura": {
                "http": [
                  "https://optimism-goerli.infura.io/v3",
                ],
                "webSocket": [
                  "wss://optimism-goerli.infura.io/ws/v3",
                ],
              },
              "public": {
                "http": [
                  "https://goerli.optimism.io",
                ],
              },
            },
            "testnet": true,
          },
          {
            "blockExplorers": {
              "default": {
                "name": "Basescan",
                "url": "https://goerli.basescan.org",
              },
              "etherscan": {
                "name": "Basescan",
                "url": "https://goerli.basescan.org",
              },
            },
            "contracts": {
              "multicall3": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 1376988,
              },
            },
            "id": 84531,
            "isL1": false,
            "isL2": true,
            "isOpChain": true,
            "isSuperchain": true,
            "l1": {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://goerli.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://goerli.etherscan.io",
                },
              },
              "contracts": {
                "ensRegistry": {
                  "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                },
                "ensUniversalResolver": {
                  "address": "0x56522D00C410a43BFfDF00a9A569489297385790",
                  "blockCreated": 8765204,
                },
                "multicall3": {
                  "address": "0xca11bde05977b3631167028862be2a173976ca11",
                  "blockCreated": 6507670,
                },
              },
              "id": 5,
              "name": "Goerli",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Goerli Ether",
                "symbol": "ETH",
              },
              "network": "goerli",
              "rpcUrls": {
                "alchemy": {
                  "http": [
                    "https://eth-goerli.g.alchemy.com/v2",
                  ],
                  "webSocket": [
                    "wss://eth-goerli.g.alchemy.com/v2",
                  ],
                },
                "default": {
                  "http": [
                    "https://rpc.ankr.com/eth_goerli",
                  ],
                },
                "infura": {
                  "http": [
                    "https://goerli.infura.io/v3",
                  ],
                  "webSocket": [
                    "wss://goerli.infura.io/ws/v3",
                  ],
                },
                "public": {
                  "http": [
                    "https://rpc.ankr.com/eth_goerli",
                  ],
                },
              },
              "testnet": true,
            },
            "name": "Base Goerli",
            "nativeCurrency": {
              "decimals": 18,
              "name": "Base Goerli",
              "symbol": "ETH",
            },
            "network": "base-goerli",
            "opContracts": {
              "L1CrossDomainMessengerProxy": "0x8e5693140eA606bcEB98761d9beB1BC87383706D",
              "L1StandardBridgeProxy": "0xfA6D8Ee5BE770F84FC001D098C4bD604Fe01284a",
              "L2OutputOracleProxy": "0x2A35891ff30313CcFa6CE88dcf3858bb075A2298",
              "OptimismPortalProxy": "0xe93c8cD0D409341205A592f8c4Ac1A5fe5585cfA",
            },
            "rpcUrls": {
              "default": {
                "http": [
                  "https://goerli.base.org",
                ],
              },
              "public": {
                "http": [
                  "https://goerli.base.org",
                ],
              },
            },
            "testnet": true,
          },
          {
            "blockExplorers": {
              "default": {
                "name": "Explorer",
                "url": "https://testnet.explorer.zora.energy",
              },
            },
            "contracts": {
              "multicall3": {
                "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
                "blockCreated": 189123,
              },
            },
            "id": 999,
            "isL1": false,
            "isL2": true,
            "isOpChain": true,
            "isSuperchain": true,
            "l1": {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://goerli.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://goerli.etherscan.io",
                },
              },
              "contracts": {
                "ensRegistry": {
                  "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                },
                "ensUniversalResolver": {
                  "address": "0x56522D00C410a43BFfDF00a9A569489297385790",
                  "blockCreated": 8765204,
                },
                "multicall3": {
                  "address": "0xca11bde05977b3631167028862be2a173976ca11",
                  "blockCreated": 6507670,
                },
              },
              "id": 5,
              "name": "Goerli",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Goerli Ether",
                "symbol": "ETH",
              },
              "network": "goerli",
              "rpcUrls": {
                "alchemy": {
                  "http": [
                    "https://eth-goerli.g.alchemy.com/v2",
                  ],
                  "webSocket": [
                    "wss://eth-goerli.g.alchemy.com/v2",
                  ],
                },
                "default": {
                  "http": [
                    "https://rpc.ankr.com/eth_goerli",
                  ],
                },
                "infura": {
                  "http": [
                    "https://goerli.infura.io/v3",
                  ],
                  "webSocket": [
                    "wss://goerli.infura.io/ws/v3",
                  ],
                },
                "public": {
                  "http": [
                    "https://rpc.ankr.com/eth_goerli",
                  ],
                },
              },
              "testnet": true,
            },
            "name": "Zora Goerli Testnet",
            "nativeCurrency": {
              "decimals": 18,
              "name": "Zora Goerli",
              "symbol": "ETH",
            },
            "network": "zora-testnet",
            "opContracts": {
              "L1CrossDomainMessengerProxy": "0xD87342e16352D33170557A7dA1e5fB966a60FafC",
              "L1StandardBridgeProxy": "0x7CC09AC2452D6555d5e0C213Ab9E2d44eFbFc956",
              "L2OutputOracleProxy": "0xdD292C9eEd00f6A32Ff5245d0BCd7f2a15f24e00",
              "OptimismPortalProxy": "0xDb9F51790365e7dc196e7D072728df39Be958ACe",
            },
            "rpcUrls": {
              "default": {
                "http": [
                  "https://testnet.rpc.zora.energy",
                ],
                "webSocket": [
                  "wss://testnet.rpc.zora.energy",
                ],
              },
              "public": {
                "http": [
                  "https://testnet.rpc.zora.energy",
                ],
                "webSocket": [
                  "wss://testnet.rpc.zora.energy",
                ],
              },
            },
            "testnet": true,
          },
        ],
        "name": "Goerli",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Goerli Ether",
          "symbol": "ETH",
        },
        "network": "goerli",
        "rpcUrls": {
          "alchemy": {
            "http": [
              "https://eth-goerli.g.alchemy.com/v2",
            ],
            "webSocket": [
              "wss://eth-goerli.g.alchemy.com/v2",
            ],
          },
          "default": {
            "http": [
              "https://rpc.ankr.com/eth_goerli",
            ],
          },
          "infura": {
            "http": [
              "https://goerli.infura.io/v3",
            ],
            "webSocket": [
              "wss://goerli.infura.io/ws/v3",
            ],
          },
          "public": {
            "http": [
              "https://rpc.ankr.com/eth_goerli",
            ],
          },
        },
        "testnet": true,
      },
      "mainnet": {
        "blockExplorers": {
          "default": {
            "name": "Etherscan",
            "url": "https://etherscan.io",
          },
          "etherscan": {
            "name": "Etherscan",
            "url": "https://etherscan.io",
          },
        },
        "contracts": {
          "ensRegistry": {
            "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          "ensUniversalResolver": {
            "address": "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
            "blockCreated": 16966585,
          },
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 14353601,
          },
        },
        "id": 1,
        "isL1": true,
        "isL2": false,
        "isOpChain": true,
        "isSuperchain": true,
        "l1": {
          "blockExplorers": {
            "default": {
              "name": "Etherscan",
              "url": "https://etherscan.io",
            },
            "etherscan": {
              "name": "Etherscan",
              "url": "https://etherscan.io",
            },
          },
          "contracts": {
            "ensRegistry": {
              "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            },
            "ensUniversalResolver": {
              "address": "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
              "blockCreated": 16966585,
            },
            "multicall3": {
              "address": "0xca11bde05977b3631167028862be2a173976ca11",
              "blockCreated": 14353601,
            },
          },
          "id": 1,
          "name": "Ethereum",
          "nativeCurrency": {
            "decimals": 18,
            "name": "Ether",
            "symbol": "ETH",
          },
          "network": "homestead",
          "rpcUrls": {
            "alchemy": {
              "http": [
                "https://eth-mainnet.g.alchemy.com/v2",
              ],
              "webSocket": [
                "wss://eth-mainnet.g.alchemy.com/v2",
              ],
            },
            "default": {
              "http": [
                "https://cloudflare-eth.com",
              ],
            },
            "infura": {
              "http": [
                "https://mainnet.infura.io/v3",
              ],
              "webSocket": [
                "wss://mainnet.infura.io/ws/v3",
              ],
            },
            "public": {
              "http": [
                "https://cloudflare-eth.com",
              ],
            },
          },
        },
        "l2s": [
          {
            "blockExplorers": {
              "default": {
                "name": "Optimism Explorer",
                "url": "https://explorer.optimism.io",
              },
              "etherscan": {
                "name": "Etherscan",
                "url": "https://optimistic.etherscan.io",
              },
            },
            "contracts": {
              "multicall3": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 4286263,
              },
            },
            "id": 10,
            "isL1": false,
            "isL2": true,
            "isOpChain": true,
            "isSuperchain": true,
            "l1": {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://etherscan.io",
                },
              },
              "contracts": {
                "ensRegistry": {
                  "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                },
                "ensUniversalResolver": {
                  "address": "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
                  "blockCreated": 16966585,
                },
                "multicall3": {
                  "address": "0xca11bde05977b3631167028862be2a173976ca11",
                  "blockCreated": 14353601,
                },
              },
              "id": 1,
              "name": "Ethereum",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Ether",
                "symbol": "ETH",
              },
              "network": "homestead",
              "rpcUrls": {
                "alchemy": {
                  "http": [
                    "https://eth-mainnet.g.alchemy.com/v2",
                  ],
                  "webSocket": [
                    "wss://eth-mainnet.g.alchemy.com/v2",
                  ],
                },
                "default": {
                  "http": [
                    "https://cloudflare-eth.com",
                  ],
                },
                "infura": {
                  "http": [
                    "https://mainnet.infura.io/v3",
                  ],
                  "webSocket": [
                    "wss://mainnet.infura.io/ws/v3",
                  ],
                },
                "public": {
                  "http": [
                    "https://cloudflare-eth.com",
                  ],
                },
              },
            },
            "name": "OP Mainnet",
            "nativeCurrency": {
              "decimals": 18,
              "name": "Ether",
              "symbol": "ETH",
            },
            "network": "optimism",
            "opContracts": {
              "L1CrossDomainMessengerProxy": "0x25ace71c97B33Cc4729CF772ae268934F7ab5fA1",
              "L1StandardBridgeProxy": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1",
              "L2OutputOracleProxy": "0xdfe97868233d1aa22e815a266982f2cf17685a27",
              "OptimismPortalProxy": "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed",
            },
            "rpcUrls": {
              "alchemy": {
                "http": [
                  "https://opt-mainnet.g.alchemy.com/v2",
                ],
                "webSocket": [
                  "wss://opt-mainnet.g.alchemy.com/v2",
                ],
              },
              "default": {
                "http": [
                  "https://mainnet.optimism.io",
                ],
              },
              "infura": {
                "http": [
                  "https://optimism-mainnet.infura.io/v3",
                ],
                "webSocket": [
                  "wss://optimism-mainnet.infura.io/ws/v3",
                ],
              },
              "public": {
                "http": [
                  "https://mainnet.optimism.io",
                ],
              },
            },
          },
          {
            "blockExplorers": {
              "blockscout": {
                "name": "Basescout",
                "url": "https://base.blockscout.com",
              },
              "default": {
                "name": "Basescan",
                "url": "https://basescan.org",
              },
              "etherscan": {
                "name": "Basescan",
                "url": "https://basescan.org",
              },
            },
            "contracts": {
              "multicall3": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 5022,
              },
            },
            "id": 8453,
            "isL1": false,
            "isL2": true,
            "isOpChain": true,
            "isSuperchain": true,
            "l1": {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://etherscan.io",
                },
              },
              "contracts": {
                "ensRegistry": {
                  "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                },
                "ensUniversalResolver": {
                  "address": "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
                  "blockCreated": 16966585,
                },
                "multicall3": {
                  "address": "0xca11bde05977b3631167028862be2a173976ca11",
                  "blockCreated": 14353601,
                },
              },
              "id": 1,
              "name": "Ethereum",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Ether",
                "symbol": "ETH",
              },
              "network": "homestead",
              "rpcUrls": {
                "alchemy": {
                  "http": [
                    "https://eth-mainnet.g.alchemy.com/v2",
                  ],
                  "webSocket": [
                    "wss://eth-mainnet.g.alchemy.com/v2",
                  ],
                },
                "default": {
                  "http": [
                    "https://cloudflare-eth.com",
                  ],
                },
                "infura": {
                  "http": [
                    "https://mainnet.infura.io/v3",
                  ],
                  "webSocket": [
                    "wss://mainnet.infura.io/ws/v3",
                  ],
                },
                "public": {
                  "http": [
                    "https://cloudflare-eth.com",
                  ],
                },
              },
            },
            "name": "Base",
            "nativeCurrency": {
              "decimals": 18,
              "name": "Base",
              "symbol": "ETH",
            },
            "network": "base",
            "opContracts": {
              "L1CrossDomainMessengerProxy": "0x866E82a600A1414e583f7F13623F1aC5d58b0Afa",
              "L1StandardBridgeProxy": "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
              "L2OutputOracleProxy": "0x56315b90c40730925ec5485cf004d835058518A0",
              "OptimismPortalProxy": "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
            },
            "rpcUrls": {
              "default": {
                "http": [
                  "https://mainnet.base.org",
                ],
              },
              "public": {
                "http": [
                  "https://mainnet.base.org",
                ],
              },
            },
          },
          {
            "blockExplorers": {
              "default": {
                "name": "Explorer",
                "url": "https://explorer.zora.energy",
              },
            },
            "contracts": {
              "multicall3": {
                "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
                "blockCreated": 5882,
              },
            },
            "id": 7777777,
            "isL1": false,
            "isL2": true,
            "isOpChain": true,
            "isSuperchain": true,
            "l1": {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://etherscan.io",
                },
              },
              "contracts": {
                "ensRegistry": {
                  "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                },
                "ensUniversalResolver": {
                  "address": "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
                  "blockCreated": 16966585,
                },
                "multicall3": {
                  "address": "0xca11bde05977b3631167028862be2a173976ca11",
                  "blockCreated": 14353601,
                },
              },
              "id": 1,
              "name": "Ethereum",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Ether",
                "symbol": "ETH",
              },
              "network": "homestead",
              "rpcUrls": {
                "alchemy": {
                  "http": [
                    "https://eth-mainnet.g.alchemy.com/v2",
                  ],
                  "webSocket": [
                    "wss://eth-mainnet.g.alchemy.com/v2",
                  ],
                },
                "default": {
                  "http": [
                    "https://cloudflare-eth.com",
                  ],
                },
                "infura": {
                  "http": [
                    "https://mainnet.infura.io/v3",
                  ],
                  "webSocket": [
                    "wss://mainnet.infura.io/ws/v3",
                  ],
                },
                "public": {
                  "http": [
                    "https://cloudflare-eth.com",
                  ],
                },
              },
            },
            "name": "Zora",
            "nativeCurrency": {
              "decimals": 18,
              "name": "Ether",
              "symbol": "ETH",
            },
            "network": "zora",
            "opContracts": {
              "L1CrossDomainMessengerProxy": "0xdC40a14d9abd6F410226f1E6de71aE03441ca506",
              "L1StandardBridgeProxy": "0x3e2Ea9B92B7E48A52296fD261dc26fd995284631",
              "L2OutputOracleProxy": "0x9E6204F750cD866b299594e2aC9eA824E2e5f95c",
              "OptimismPortalProxy": "0x1a0ad011913A150f69f6A19DF447A0CfD9551054",
            },
            "rpcUrls": {
              "default": {
                "http": [
                  "https://rpc.zora.energy",
                ],
                "webSocket": [
                  "wss://rpc.zora.energy",
                ],
              },
              "public": {
                "http": [
                  "https://rpc.zora.energy",
                ],
                "webSocket": [
                  "wss://rpc.zora.energy",
                ],
              },
            },
          },
        ],
        "name": "Ethereum",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Ether",
          "symbol": "ETH",
        },
        "network": "homestead",
        "rpcUrls": {
          "alchemy": {
            "http": [
              "https://eth-mainnet.g.alchemy.com/v2",
            ],
            "webSocket": [
              "wss://eth-mainnet.g.alchemy.com/v2",
            ],
          },
          "default": {
            "http": [
              "https://cloudflare-eth.com",
            ],
          },
          "infura": {
            "http": [
              "https://mainnet.infura.io/v3",
            ],
            "webSocket": [
              "wss://mainnet.infura.io/ws/v3",
            ],
          },
          "public": {
            "http": [
              "https://cloudflare-eth.com",
            ],
          },
        },
      },
      "optimism": {
        "blockExplorers": {
          "default": {
            "name": "Optimism Explorer",
            "url": "https://explorer.optimism.io",
          },
          "etherscan": {
            "name": "Etherscan",
            "url": "https://optimistic.etherscan.io",
          },
        },
        "contracts": {
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 4286263,
          },
        },
        "id": 10,
        "isL1": false,
        "isL2": true,
        "isOpChain": true,
        "isSuperchain": true,
        "l1": {
          "blockExplorers": {
            "default": {
              "name": "Etherscan",
              "url": "https://etherscan.io",
            },
            "etherscan": {
              "name": "Etherscan",
              "url": "https://etherscan.io",
            },
          },
          "contracts": {
            "ensRegistry": {
              "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            },
            "ensUniversalResolver": {
              "address": "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
              "blockCreated": 16966585,
            },
            "multicall3": {
              "address": "0xca11bde05977b3631167028862be2a173976ca11",
              "blockCreated": 14353601,
            },
          },
          "id": 1,
          "name": "Ethereum",
          "nativeCurrency": {
            "decimals": 18,
            "name": "Ether",
            "symbol": "ETH",
          },
          "network": "homestead",
          "rpcUrls": {
            "alchemy": {
              "http": [
                "https://eth-mainnet.g.alchemy.com/v2",
              ],
              "webSocket": [
                "wss://eth-mainnet.g.alchemy.com/v2",
              ],
            },
            "default": {
              "http": [
                "https://cloudflare-eth.com",
              ],
            },
            "infura": {
              "http": [
                "https://mainnet.infura.io/v3",
              ],
              "webSocket": [
                "wss://mainnet.infura.io/ws/v3",
              ],
            },
            "public": {
              "http": [
                "https://cloudflare-eth.com",
              ],
            },
          },
        },
        "name": "OP Mainnet",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Ether",
          "symbol": "ETH",
        },
        "network": "optimism",
        "opContracts": {
          "L1CrossDomainMessengerProxy": "0x25ace71c97B33Cc4729CF772ae268934F7ab5fA1",
          "L1StandardBridgeProxy": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1",
          "L2OutputOracleProxy": "0xdfe97868233d1aa22e815a266982f2cf17685a27",
          "OptimismPortalProxy": "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed",
        },
        "rpcUrls": {
          "alchemy": {
            "http": [
              "https://opt-mainnet.g.alchemy.com/v2",
            ],
            "webSocket": [
              "wss://opt-mainnet.g.alchemy.com/v2",
            ],
          },
          "default": {
            "http": [
              "https://mainnet.optimism.io",
            ],
          },
          "infura": {
            "http": [
              "https://optimism-mainnet.infura.io/v3",
            ],
            "webSocket": [
              "wss://optimism-mainnet.infura.io/ws/v3",
            ],
          },
          "public": {
            "http": [
              "https://mainnet.optimism.io",
            ],
          },
        },
      },
      "optimismGoerli": {
        "blockExplorers": {
          "default": {
            "name": "Etherscan",
            "url": "https://goerli-optimism.etherscan.io",
          },
          "etherscan": {
            "name": "Etherscan",
            "url": "https://goerli-optimism.etherscan.io",
          },
        },
        "contracts": {
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 49461,
          },
        },
        "id": 420,
        "isL1": false,
        "isL2": true,
        "isOpChain": true,
        "isSuperchain": true,
        "l1": {
          "blockExplorers": {
            "default": {
              "name": "Etherscan",
              "url": "https://goerli.etherscan.io",
            },
            "etherscan": {
              "name": "Etherscan",
              "url": "https://goerli.etherscan.io",
            },
          },
          "contracts": {
            "ensRegistry": {
              "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            },
            "ensUniversalResolver": {
              "address": "0x56522D00C410a43BFfDF00a9A569489297385790",
              "blockCreated": 8765204,
            },
            "multicall3": {
              "address": "0xca11bde05977b3631167028862be2a173976ca11",
              "blockCreated": 6507670,
            },
          },
          "id": 5,
          "name": "Goerli",
          "nativeCurrency": {
            "decimals": 18,
            "name": "Goerli Ether",
            "symbol": "ETH",
          },
          "network": "goerli",
          "rpcUrls": {
            "alchemy": {
              "http": [
                "https://eth-goerli.g.alchemy.com/v2",
              ],
              "webSocket": [
                "wss://eth-goerli.g.alchemy.com/v2",
              ],
            },
            "default": {
              "http": [
                "https://rpc.ankr.com/eth_goerli",
              ],
            },
            "infura": {
              "http": [
                "https://goerli.infura.io/v3",
              ],
              "webSocket": [
                "wss://goerli.infura.io/ws/v3",
              ],
            },
            "public": {
              "http": [
                "https://rpc.ankr.com/eth_goerli",
              ],
            },
          },
          "testnet": true,
        },
        "name": "Optimism Goerli",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Goerli Ether",
          "symbol": "ETH",
        },
        "network": "optimism-goerli",
        "opContracts": {
          "L1CrossDomainMessengerProxy": "0x5086d1eEF304eb5284A0f6720f79403b4e9bE294",
          "L1StandardBridgeProxy": "0x636Af16bf2f682dD3109e60102b8E1A089FedAa8",
          "L2OutputOracleProxy": "0xE6Dfba0953616Bacab0c9A8ecb3a9BBa77FC15c0",
          "OptimismPortalProxy": "0x5b47E1A08Ea6d985D6649300584e6722Ec4B1383",
        },
        "rpcUrls": {
          "alchemy": {
            "http": [
              "https://opt-goerli.g.alchemy.com/v2",
            ],
            "webSocket": [
              "wss://opt-goerli.g.alchemy.com/v2",
            ],
          },
          "default": {
            "http": [
              "https://goerli.optimism.io",
            ],
          },
          "infura": {
            "http": [
              "https://optimism-goerli.infura.io/v3",
            ],
            "webSocket": [
              "wss://optimism-goerli.infura.io/ws/v3",
            ],
          },
          "public": {
            "http": [
              "https://goerli.optimism.io",
            ],
          },
        },
        "testnet": true,
      },
      "zora": {
        "blockExplorers": {
          "default": {
            "name": "Explorer",
            "url": "https://explorer.zora.energy",
          },
        },
        "contracts": {
          "multicall3": {
            "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
            "blockCreated": 5882,
          },
        },
        "id": 7777777,
        "isL1": false,
        "isL2": true,
        "isOpChain": true,
        "isSuperchain": true,
        "l1": {
          "blockExplorers": {
            "default": {
              "name": "Etherscan",
              "url": "https://etherscan.io",
            },
            "etherscan": {
              "name": "Etherscan",
              "url": "https://etherscan.io",
            },
          },
          "contracts": {
            "ensRegistry": {
              "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            },
            "ensUniversalResolver": {
              "address": "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
              "blockCreated": 16966585,
            },
            "multicall3": {
              "address": "0xca11bde05977b3631167028862be2a173976ca11",
              "blockCreated": 14353601,
            },
          },
          "id": 1,
          "name": "Ethereum",
          "nativeCurrency": {
            "decimals": 18,
            "name": "Ether",
            "symbol": "ETH",
          },
          "network": "homestead",
          "rpcUrls": {
            "alchemy": {
              "http": [
                "https://eth-mainnet.g.alchemy.com/v2",
              ],
              "webSocket": [
                "wss://eth-mainnet.g.alchemy.com/v2",
              ],
            },
            "default": {
              "http": [
                "https://cloudflare-eth.com",
              ],
            },
            "infura": {
              "http": [
                "https://mainnet.infura.io/v3",
              ],
              "webSocket": [
                "wss://mainnet.infura.io/ws/v3",
              ],
            },
            "public": {
              "http": [
                "https://cloudflare-eth.com",
              ],
            },
          },
        },
        "name": "Zora",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Ether",
          "symbol": "ETH",
        },
        "network": "zora",
        "opContracts": {
          "L1CrossDomainMessengerProxy": "0xdC40a14d9abd6F410226f1E6de71aE03441ca506",
          "L1StandardBridgeProxy": "0x3e2Ea9B92B7E48A52296fD261dc26fd995284631",
          "L2OutputOracleProxy": "0x9E6204F750cD866b299594e2aC9eA824E2e5f95c",
          "OptimismPortalProxy": "0x1a0ad011913A150f69f6A19DF447A0CfD9551054",
        },
        "rpcUrls": {
          "default": {
            "http": [
              "https://rpc.zora.energy",
            ],
            "webSocket": [
              "wss://rpc.zora.energy",
            ],
          },
          "public": {
            "http": [
              "https://rpc.zora.energy",
            ],
            "webSocket": [
              "wss://rpc.zora.energy",
            ],
          },
        },
      },
      "zoraGoerli": {
        "blockExplorers": {
          "default": {
            "name": "Explorer",
            "url": "https://testnet.explorer.zora.energy",
          },
        },
        "contracts": {
          "multicall3": {
            "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
            "blockCreated": 189123,
          },
        },
        "id": 999,
        "isL1": false,
        "isL2": true,
        "isOpChain": true,
        "isSuperchain": true,
        "l1": {
          "blockExplorers": {
            "default": {
              "name": "Etherscan",
              "url": "https://goerli.etherscan.io",
            },
            "etherscan": {
              "name": "Etherscan",
              "url": "https://goerli.etherscan.io",
            },
          },
          "contracts": {
            "ensRegistry": {
              "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            },
            "ensUniversalResolver": {
              "address": "0x56522D00C410a43BFfDF00a9A569489297385790",
              "blockCreated": 8765204,
            },
            "multicall3": {
              "address": "0xca11bde05977b3631167028862be2a173976ca11",
              "blockCreated": 6507670,
            },
          },
          "id": 5,
          "name": "Goerli",
          "nativeCurrency": {
            "decimals": 18,
            "name": "Goerli Ether",
            "symbol": "ETH",
          },
          "network": "goerli",
          "rpcUrls": {
            "alchemy": {
              "http": [
                "https://eth-goerli.g.alchemy.com/v2",
              ],
              "webSocket": [
                "wss://eth-goerli.g.alchemy.com/v2",
              ],
            },
            "default": {
              "http": [
                "https://rpc.ankr.com/eth_goerli",
              ],
            },
            "infura": {
              "http": [
                "https://goerli.infura.io/v3",
              ],
              "webSocket": [
                "wss://goerli.infura.io/ws/v3",
              ],
            },
            "public": {
              "http": [
                "https://rpc.ankr.com/eth_goerli",
              ],
            },
          },
          "testnet": true,
        },
        "name": "Zora Goerli Testnet",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Zora Goerli",
          "symbol": "ETH",
        },
        "network": "zora-testnet",
        "opContracts": {
          "L1CrossDomainMessengerProxy": "0xD87342e16352D33170557A7dA1e5fB966a60FafC",
          "L1StandardBridgeProxy": "0x7CC09AC2452D6555d5e0C213Ab9E2d44eFbFc956",
          "L2OutputOracleProxy": "0xdD292C9eEd00f6A32Ff5245d0BCd7f2a15f24e00",
          "OptimismPortalProxy": "0xDb9F51790365e7dc196e7D072728df39Be958ACe",
        },
        "rpcUrls": {
          "default": {
            "http": [
              "https://testnet.rpc.zora.energy",
            ],
            "webSocket": [
              "wss://testnet.rpc.zora.energy",
            ],
          },
          "public": {
            "http": [
              "https://testnet.rpc.zora.energy",
            ],
            "webSocket": [
              "wss://testnet.rpc.zora.energy",
            ],
          },
        },
        "testnet": true,
      },
    }
  `)
})

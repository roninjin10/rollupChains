<p align="center"><b></b></p>
<p align="center">Rollup aware chains objects extending wagmi<b>
</b></p>

# rollup-chains • [![CI](https://github.com/roninjin10/rollupChains/actions/workflows/tests.yml/badge.svg)](https://github.com/roninjin10/rollupChains/actions/workflows/tests.yml)

A simple drop in replacement for [wagmis existing chain object](https://github.com/wagmi-dev/references/tree/27c9ee2258c5ba75a93db4cfe5f0e6a791e05b80/packages/chains)

The source code is very small just 1 file [src/rollupChains.ts](https://github.com/roninjin10/rollupChains/blob/main/src/rollupChains.ts). But this simple abstraction can really clean up your code significantly if your DAPP is multichain

## Installation

npm

```bash
npm i @roninjin10/rollup-chains
```

pnpm

```bash
pnpm i @roninjin10/rollup-chains
```

yarn

```bash
yarn add @roninjin10/rollup-chains
```

## Usage

[Use just like @wagmi/chains](https://wagmi.sh/core/chains) but with some extra rollup properties

```typescript
// import {mainnet, optimism} from 'wagmi/chains'
import { mainnet, optimism } from "@roninjin10/rollup-chains";

// the extend wagmi interface
mainnet.id
optimism.rpcUrls

// with added rollup specific properties
mainnet.l1 // returns mainnet
mainnet.l2 // returns optimism
optimism.12 // returns optimism
optimism.l1 // returns mainnet
optimism.isL2 // returns true
optimism.isL2 // returns false
```

## Why

Instead of writing bugprone and unergonomic code like this

```typescript
const currentChainId = connectChain.id
const l1ChainId = connectedChain.id === 1 ? 1 : connectedChain.id === 10 ? 1 : connectedChain.id === 5 ? 5 : connectedChain.id === 420 ? 5 ...
```

Or needing to add helper functions simply swap these chains in for wagmi chains to get rollup aware chains!

```typescript
const currentChainId = connectedChain.id;
// this will return the l1 chain regardless of if user is connected to testnet, mainnet, l1, or l2
const l1ChainId = connectedChain.l1.id;
```

### Author: Will Cory 👨🏻‍💻

<a href="https://twitter.com/fucory">
    <img alt="Twitter" src="https://img.shields.io/twitter/url.svg?label=%40fucory&style=social&url=https%3A%2F%2Ftwitter.com%2Ffucory" />
</a>
```

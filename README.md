
<div align="left" style="position: relative;">
<img src="./icons/gandalf.png" align="right" width="30%" style="margin: -20px 0 0 20px;">

<h3 style="font-size:26px;">HYBRID LOGICAL CLOCK: <span style="font-size:18px;" >The Wizard's Arsenal</span></h3>

<p align="left"><em>The most opinionated platform... ever.</em></p>
<p align="left"><em>Trust me... I'm a fucking wizard... 🧙</em></p>
<p align="left">Platforms stats:</p>
<p align="left">
<img src="https://img.shields.io/badge/LINES OF CODE- 10,300,000-95ED27?style=flat">
<img src="https://img.shields.io/badge/FEATURES- UNKNOWN-95ED27?style=flat">
<img src="https://img.shields.io/badge/REACTS RULES ON HOOKS- 0-95ED27?style=flat">
<img src="https://img.shields.io/badge/DISRUPTORS- 18+-95ED27?style=flat">
<img src="https://img.shields.io/badge/MESSAGE QUEUES- 5-95ED27?style=flat">
</p>
<p align="left">VSCode ext:</p>
<p align="left">
<img src="https://img.shields.io/badge/THEMES- 251-95ED27?style=flat">
<img src="https://img.shields.io/badge/SIDEBARS- 160+-95ED27?style=flat">
<img src="https://img.shields.io/badge/PRODUCT ICONS- 651-95ED27?style=flat">
<img src="https://img.shields.io/badge/FILE ICONS- 454-95ED27?style=flat">
<img src="https://img.shields.io/badge/VSCode Extentions- 82+-95ED27?style=flat">
<img src="https://img.shields.io/badge/FEATURES- SHIT TONNE-95ED27?style=flat">
</p>
<p align="left">Small but powerful repos worth checking out:</p>
<p align="left">

- [![🧙 Alias Types](https://img.shields.io/badge/Alias%20Types-000000.svg?style=flat&logo=typescript&logoColor=white)](https://github.com/the-w1zard/alias_types) <a href="https://www.npmjs.com/package/@the-w1zard/alias_types"><img src="./icons/npm.png" alt="alias_types" width="20" height="20"></a>
- [![🧙 The Cloud](https://img.shields.io/badge/%F0%9F%A7%99%20App%20Store-000000.svg?style=flat)](https://github.com/the-w1zard/app_store)  <a href="https://www.npmjs.com/package/@the-w1zard/store"><img src="./icons/npm.png" alt="app_store" width="20" height="20"></a>
- [![🧙 The Cloud](https://img.shields.io/badge/%F0%9F%A7%99%20DX-95ED27.svg?style=flat)](https://github.com/the-w1zard/dx) <a href="https://www.npmjs.com/package/@the-w1zard/dx"><img src="./icons/npm.png" alt="dx" width="20" height="20"></a>
- [![🧙 The Cloud](https://img.shields.io/badge/%F0%9F%A7%99%20Temporal%20Shift-77AA99.svg?style=flat)](https://github.com/the-w1zard/temporal_shift) <a href="https://www.npmjs.com/package/@the-w1zard/temporal_shift"><img src="./icons/npm.png" alt="temporal_shift" width="20" height="20"></a>
- [![🧙 The Cloud](https://img.shields.io/badge/%F0%9F%A7%99%20The%20Cloud-02303A.svg?style=flat)](https://github.com/the-w1zard/the_cloud)  <a href="https://www.npmjs.com/package/@the-w1zard/the-cloud"><img src="./icons/npm.png" alt="app_store" width="20" height="20"></a>
- [![🧙 SINGULARITY](https://img.shields.io/badge/%F0%9F%A7%99%20SINGULARITY-02303A.svg?style=flat)](https://github.com/the-w1zard)  
- [![🧙 Sometimes,%20my%20genius...%20It%20generates%20gravity.](https://img.shields.io/badge/%F0%9F%A7%99%20Sometimes,%20my%20genius...%20It%20generates%20gravity.-4285F4.svg?style=flat)](https://github.com/the-w1zard)  
- [![🧙 The Wizard](https://img.shields.io/badge/%F0%9F%A7%99%20Coming%20Soon:%20The%20Wizard%20Ed.-7F52FF.svg?style=flat)](https://github.com/the-w1zard)  
- [![🧙 Hadron Particle Disruptor](https://img.shields.io/badge/%F0%9F%A7%99%20Coming%20Soon:%20Hadron%20Particle%20Disruptor-23ED8B00.svg?style=flat)](https://github.com/the-w1zard)  
</p>
<p align="left">The goal? To remove all friction, from everything.</p>
</div>
<br clear="right">

---
<span  style="font-family: monospace"> 


Hybrid Logical Clock implementations for monotonic event ordering, causal timestamp propagation, and distributed synchronization.

## Overview

This module provides two Hybrid Logical Clock implementations:

- **HYBRID_LOGICAL_CLOCK** — Standard hybrid logical clock with wall-time and logical-counter ordering.
- **HYBRID_LOGICAL_CLOCK_CRDT** — CRDT-oriented implementation with bounded remote clock adoption and deterministic node-based ordering.

Both implementations use string-based timestamps, keeping the canonical wire representation compact and avoiding unnecessary object allocation during transport.

## Timestamp Format

Canonical wire format:

```text
wallTime:logical:nodeId
```

| Component | Description |
|---|---|
| `wallTime` | Milliseconds since Unix epoch |
| `logical` | Monotonic logical counter |
| `nodeId` | Node identity used for deterministic ordering |

The timestamp is stored and transmitted as a string. Parsed tuples are intended for computation.

## Implementations

### HYBRID_LOGICAL_CLOCK

Standard HLC implementation.

Provides:
- Monotonic local timestamps through `tick()`.
- Remote timestamp merging through `update()`.
- Timestamp comparison through `compare()`.

### HYBRID_LOGICAL_CLOCK_CRDT

CRDT-oriented HLC implementation.

Extends the standard clock behavior with:

- **Causal propagation:** Remote timestamps advance the local logical clock.
- **Bounded clock adoption:** Remote wall times are clamped to a maximum tolerated skew.
- **Deterministic ordering:** Node identity provides a lexical tiebreaker when wall time and logical counters match.

Default maximum remote clock skew: `60_000 ms`.

## Public API

### Clock Operations

| Method | Description |
|---|---|
| `tick()` | Generates the next local timestamp |
| `update(remote)` | Merges a remote timestamp |
| `compare(a, b)` | Compares two timestamps |

### Timestamp Utilities

| Function | Description |
|---|---|
| `splitHLC(ts)` | Splits a timestamp into wall time, logical counter, and node ID |
| `parseHLC(ts)` | Extracts wall time and logical counter |
| `isHLCTimestamp(value)` | Performs structural timestamp type checking |

### Types

- `HLCTimestamp`
- `HLCParts`
- `HLCParsed`
- `HLCNodeId`
- `IHLC`
- `IHLCClass`
- `HLCFactory`
- `SplitHLC`
- `ParseHLC`
- `HLCSurface`

## Usage

```ts
import {
    HYBRID_LOGICAL_CLOCK,
    HYBRID_LOGICAL_CLOCK_CRDT,
    splitHLC,
    parseHLC,
    isHLCTimestamp
} from './hlc'

// Standard HLC
const clock = new HYBRID_LOGICAL_CLOCK()

const timestamp = clock.tick()

// CRDT-oriented HLC
const crdt = new HYBRID_LOGICAL_CLOCK_CRDT('node-a')

const event = crdt.tick()

// Merge remote events
crdt.update(timestamp)

// Compare timestamps
const order = crdt.compare(event, timestamp)

// Parse timestamps
const [wall, logical, node] = splitHLC(event)

// Extract numeric components
const [eventWall, eventLogical] = parseHLC(event)

// Structural validation
if (isHLCTimestamp(event)) {
    // Valid timestamp structure
}
```

## Design

The module separates clock generation and causal ordering from the infrastructure that consumes timestamps.

It provides reusable clock implementations, a shared timestamp representation, parsing utilities, and explicit TypeScript contracts.

Consumers can use the clock implementations directly or depend on the `IHLC` interface.

The timestamp string remains the canonical representation across transport and storage boundaries.

</span>

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TypeScript declaration files (`.d.ts`) for Sox's Botmaker, a bot scripting framework built on RuneLite for Old School RuneScape. This package bridges Java APIs (RuneLite, Java standard library, Jagex) into TypeScript so bot scripts get full type safety. Published as `@deafwave/osrs-botmaker-types` on npm.

## Commands

- **Build**: `pnpm build` (runs `tsc`, then copies `src/index.d.ts` and `src/types/` to `dist/`)
- **Lint**: `pnpm lint` (ESLint in quiet mode; note: all `.d.ts` files are excluded from linting)
- **Regenerate RuneLite barrel**: `pnpm generate:runelite-barrel` (auto-generates `src/types/runelite/index.d.ts` from all `.d.ts` files in the runelite directory)

There are no tests in this project.

## Architecture

### Type Declaration Files (`src/types/`)

The core of this project. These `.d.ts` files are **not compiled by TypeScript** -- they are simply copied to `dist/` during build. They use `/// <reference path="..." />` directives to chain dependencies.

- **`runelite/`** -- RuneLite API types (~1,463 files). Mirrors the Java package structure (`net.runelite.api`, `net.runelite.client`, `com.jagex`). Many files under `api/gameval/` (ItemID, NpcID, ObjectID, etc.) are **auto-generated** daily by `scripts/runelite-to-ts/` from RuneLite's Java source on GitHub.
- **`java/`** -- Java standard library type stubs (awt, lang, swing, util, etc.)
- **`sox/`** -- Sox Bot API types. Declares global variables (`bot`, `client`, `clientThread`, `configManager`, `log`) and the `bot.*` sub-API interfaces (inventory, npcs, bank, walking, etc.)
- **`rhino/`** -- Mozilla Rhino engine adapter type (`JavaAdapter`)
- **`Packages/`** -- Third-party Java package types (okhttp3)

### Rollup Plugin (`src/api/index.ts`)

Exports a Rollup plugin that replaces dotted namespace references like `net.runelite.api.NpcID.SOME_NPC` with their numeric values at build time. This works around limitations of the Rhino JavaScript engine used by Botmaker.

### Rollup ID Maps (`src/rollup/`)

Auto-generated `Record<string, number>` maps (ItemID.ts, NpcID.ts, etc.) used by the Rollup plugin for runtime constant resolution.

### Auto-Generation Pipeline (`scripts/`)

- `scripts/runelite-to-ts/` -- Standalone sub-project that fetches Java source from RuneLite's GitHub, parses `static final int` constants, and generates both `.d.ts` declarations and rollup `.ts` mapping files.
- `scripts/generate-runelite-barrel.ts` -- Generates the `runelite/index.d.ts` barrel file with all `/// <reference path>` directives.
- CI runs the update daily (`.github/workflows/update-runelite.yaml`), auto-commits, bumps patch version, and publishes.

## Type Definition Conventions

### Namespace Pattern

All types use Java-style dotted namespaces via `declare namespace`:

```typescript
declare namespace net.runelite.api {
    export class Client extends GameEngine { ... }
}
declare namespace net.runelite.api.events {
    export class GameTick {}
}
declare namespace bot {
    interface inventory { ... }
}
```

### Java-to-TypeScript Mapping

| Java | TypeScript |
|------|-----------|
| `int`, `long`, `double`, `float` | `number` |
| `String` | `string` |
| `boolean` | `boolean` |
| Nullable return | `Type \| null` |
| `int[]` | `number[]` |
| `static final int NAME = 42` | `static readonly NAME = 42;` |
| Enum values | `static MEMBER: EnumType;` |
| Method overloading | Multiple method signatures |
| `@Deprecated` | `/** @deprecated */` JSDoc |

### Key Patterns

- **RuneLite types** use `export class` inside `declare namespace` (representing Java classes)
- **Sox bot API types** use `interface` inside `declare namespace bot`
- **Enum-like Java classes** are represented as classes with `static` members (e.g., `GameState.LOGGED_IN`)
- **Reference paths** must be used to establish dependencies between `.d.ts` files
- **JSDoc comments** are copied from Java source for RuneLite types; use them consistently for Sox API types
- **Copyright headers** from RuneLite's BSD 2-clause license are preserved in derived types
- After adding/removing RuneLite `.d.ts` files, run `pnpm generate:runelite-barrel` to update the barrel

## Code Style

- **Tabs** for indentation (not spaces)
- **Single quotes**, trailing commas, semicolons
- **Print width**: 120
- **LF** line endings
- **ES Modules**: `"type": "module"` in package.json, NodeNext module resolution

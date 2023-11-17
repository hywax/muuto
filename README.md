[![muuto](https://raw.githubusercontent.com/hywax/muuto/main/public/cover.jpg)](http://hywax.space/muuto)

# Muuto

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

Word generator in ikea language.

## Installation

```bash
# Using pnpm
pnpm add muuto

# Using yarn
yarn add muuto

# Using npm
npm install muuto
```

## Usage

```ts
import muuto from 'muuto'

const name = muuto() // Vaöy
```

or use with params:

```ts
import muuto from 'muuto'

const name = muuto(7, 8) // Musvövmo
```

### API

**Signature:**

```ts
declare function mutto(min: number = 3, max: number = 9): string
```

**Params:**

| **Key** | **Type** | **Default** | **Description**    |
|---------|----------|-------------|--------------------|
| `min`   | `number` | 3           | Min length of word |
| `max`   | `number` | 9           | Max length of word |

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/muuto/latest.svg
[npm-version-href]: https://npmjs.com/package/muuto

[npm-downloads-src]: https://img.shields.io/npm/dt/muuto.svg
[npm-downloads-href]: https://npmjs.com/package/muuto

[github-actions-ci-src]: https://github.com/hywax/muuto/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/hywax/muuto/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/hywax/muuto.svg
[codecov-href]: https://codecov.io/gh/hywax/muuto

[license-src]: https://img.shields.io/npm/l/muuto.svg
[license-href]: https://npmjs.com/package/muuto

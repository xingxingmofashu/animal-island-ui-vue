# AGENTS.md — Animal UI

## Quick start

```bash
pnpm install            # also runs husky via prepare script
pnpm run dev            # starts playground Vite dev server
pnpm run lint && pnpm run format  # pre-commit hook (husky)
```

`lint` = oxlint (src/ only; `.oxlintrc.json` ignores `playground/**/*`)
`format` = oxfmt (src/ only; `.oxfmtrc.json` ignores `playground/**/*`)

## Monorepo

- **Root** (`animal-ui`, private) — UI library. All source in `src/`.
- **`playground/`** — Vite dev server. Depends via `"animal-ui": "workspace:*"`.

## Imports

Playground TS files use the workspace dep name:

```ts
import Button from 'animal-ui/runtime/components/Button.vue'
```

**Caveat:** `playground/src/assets/css/main.css` still has `@import 'animal-island-vue'` (stale from before rename). If renaming the package, update both.

## Components

All in `src/runtime/components/` with theme config in `src/theme/`:
`Button` | `Card` | `Icon` | `Input`

Common pattern:

- `tv(theme)({ ...variants })` computed style
- `ComponentConfig<typeof theme>` type from `src/runtime/types/tv.ts`
- Named slots pass `{ ui }` (the tv result)
- `--animal-*` CSS vars in `src/runtime/index.css`

Differences: `Button` uses `Pick<ButtonHTMLAttributes>` from `src/runtime/types/html.ts`; `Input` is generic `<T extends InputValue>`, uses `useVModel`/`useTemplateRef`; `Icon`/`Card` are clean SFCs.

Icons are CSS background-images from SVG files in `src/assets/`, defined in `src/runtime/icon.css`.

## Tooling

| Task      | Command                                 | Notes                                                                                |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| Typecheck | `cd playground && npx vue-tsc --noEmit` | `vue-tsc` only in playground; root has no typecheck script                           |
| Lint      | `oxlint`                                | Type-aware (`typeAware: true`). `unicorn/no-useless-spread` off. Ignores playground. |
| Format    | `oxfmt`                                 | `singleQuote`, `semi: false`, `printWidth: 120`, `trailingComma: "none"`             |

## Environment

- Tailwind v4 via `@tailwindcss/vite` plugin — **no** `tailwind.config.*`
- `.npmrc`: `shamefully-hoist=true`
- No test framework or test scripts
- Root TS: `"module": "preserve"`, `"verbatimModuleSyntax": true`, strict mode
- Playground TS: `"erasableSyntaxOnly": true` (requires `type` keyword on type-only re-exports)

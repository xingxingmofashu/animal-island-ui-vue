# Animal UI

A Vue 3 UI component library with an Animal Island theme, built on [Tailwind CSS v4](https://tailwindcss.com) and [tailwind-variants](https://github.com/nextui-org/tailwind-variants).

## Inspiration

This project is inspired by [animal-island-ui](https://github.com/guokaigdg/animal-island-ui).

## Components

| Component                                    | Description                                                               |
| -------------------------------------------- | ------------------------------------------------------------------------- |
| [Button](/src/runtime/components/Button.vue) | Versatile button with icon support, loading state, and multiple variants  |
| [Card](/src/runtime/components/Card.vue)     | Container component with header, body, and footer slots                   |
| [Icon](/src/runtime/components/Icon.vue)     | Icon display component with configurable name, size, and bounce animation |
| [Input](/src/runtime/components/Input.vue)   | Form input with leading/trailing icons, v-model support, and autofocus    |

## Install

```bash
pnpm add animal-ui
```

## Usage

```vue
<script setup lang="ts">
import Button from 'animal-ui/runtime/components/Button.vue'
</script>

<template>
  <Card>
    <Button color="primary">Login</Button>
  </Card>
</template>
```

## Development

```bash
pnpm install
pnpm run dev
```

## Scripts

| Command           | Description                     |
| ----------------- | ------------------------------- |
| `pnpm run dev`    | Start the playground dev server |
| `pnpm run lint`   | Lint with oxlint                |
| `pnpm run format` | Format with oxfmt               |

# Nuxt 3 Base

A base project for Nuxt 3 with additional features:
- linting with `eslint` and `prettier`
- example components in composition API syntax
- example setup for meta information
- internationalization with `@nuxtjs/i18n` and `vue-i18n`
- vuetify theming and components
- storybook setup with multiple modes for theming and i18n

This project uses [`@jojomatik/nuxt-bundle`](https://github.com/jojomatik/nuxt-bundle) to provide updates to basic configuration and tested dependency updates. 

If you want to opt out of `@jojomatik/nuxt-bundle` you can merge it into your projects config (e.g. `package.json`, `nuxt.config.ts`) and configure it yourself.

## Setup

Make sure to install the dependencies

```bash
yarn install
```

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

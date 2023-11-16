# Next Starter

This is a starter template to initialize a new [Next.js](https://nextjs.org/) project.

To see the example starting configuration deployed, head to: [https://next-starter-x-priyam.vercel.app/](https://next-starter-x-priyam.vercel.app/)

It includes modules from [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) which include:

- [next]
- [react]
- [react-dom][react]
- [typescript]
- [tailwindcss]
- [eslint]
- [eslint-config-next]

Additional packages/modules added to the starter-kit:

- [typescript-eslint]
- [prettier]
- [eslint-config-prettier]
- [prettier-plugin-tailwindcss]
- [zod]
- [@t3-oss/env-nextjs]
- [dotenv-cli]

Packages added which will require additional [configurations](#configuration):

- [drizzle-orm][drizzle]
- [drizzle-kit][drizzle]
- [@libsql/client]
- [next-auth@beta]

<!-- Links for packages/modules -->

[next]: https://github.com/vercel/next.js
[react]: https://github.com/facebook/react
[typescript]: https://github.com/microsoft/TypeScript
[tailwindcss]: https://github.com/tailwindlabs/tailwindcss
[eslint]: https://github.com/eslint/eslint
[eslint-config-next]: https://nextjs.org/docs/app/building-your-application/configuring/eslint#eslint-config
[typescript-eslint]: https://github.com/typescript-eslint/typescript-eslint
[prettier]: https://github.com/prettier/prettier
[eslint-config-prettier]: https://github.com/prettier/eslint-config-prettier
[prettier-plugin-tailwindcss]: https://github.com/tailwindlabs/prettier-plugin-tailwindcss
[zod]: https://github.com/colinhacks/zod
[@t3-oss/env-nextjs]: https://github.com/t3-oss/t3-env
[drizzle]: https://orm.drizzle.team/
[@libsql/client]: https://github.com/libsql/libsql-client-ts
[dotenv-cli]: https://github.com/entropitor/dotenv-cli
[next-auth@beta]: https://github.com/nextauthjs/next-auth

## Using The Template

From the command-line run:

`npx create-next-app --example https://github.com/x-priyam/next-starter`

To use a specific release, go to the release page and download the compressed source code. Extract it and rename the folder to whatever you desire. Open the renamed folder (project root) in a terminal and run `npm i`

### Configuration

#### Environment Variables

Use the `.env.local.starter` file to setup the local environment file. One way to do so would be to rename it to `.env.local` and change the values in it according to the project. You could also have multiple files like `.env.production.local` and `.env.development.local` according to your needs _([more details](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables))_.

**IMPORTANT:** When adding environment variables to any `.env` file, also make changes in `src/env.mjs`. This is a module to add type-safety to environment variables using [zod] and [@t3-oss/env-nextjs].

#### Database and ORM

This starter kit uses [Drizzle ORM][drizzle]. Just like other tools in this starter kit, this is a personal choice.

As for the database, this starter kit is setup with [Turso](https://turso.tech/), a libSQL(modified SQLite) based database provider. You can choose to another database provider very easily. Search Google for `how to setup <database-name> with Next.js and Drizzle`.

The drizzle configuration file `drizzle.config.ts` is also modified according to Turso requirements in the starter-kit. Check out the [Drizzle Config References](https://orm.drizzle.team/kit-docs/config-reference) if you want to edit it.

If you also choose to go with Turso, head to the [Turso Docs](https://docs.turso.tech/) to get instructions on how to setup a Turso Database or check out the [Turso Next.js Example](https://github.com/turso-extended/app-turso-nextjs-starter).

To setup a basic Turso Database and connect it to the starter-kit:

- Install the Turso CLI tool (for Mac/Linux/WSL on Windows)
  - `curl -sSfL https://get.tur.so/install.sh | bash`
- Create a new database
  - `turso db create <database-name>`
- Set `DATABASE_URL`
  - `turso db show <database-name> --url`
  - copy output and save in `.env.local` as `DATABASE_URL=<copied-value>`
- Set `DATABASE_AUTH_TOKEN`
  - `turso db tokens create <database-name>`
  - copy output and save in `.env.local` as `DATABASE_AUTH_TOKEN=<copied-value>`

If you end up creating any other environment variables, make sure to follow the instructions in [Configuring Environment Variables section](#environment-variables)

With most databases, you need to add a `DATABASE_URL` and some other environment variables as well.

The starter kit includes a basic user schema in `src/db/schema/users.ts`. Change it according to your own needs.

#### Authentication

The starter kit uses the beta release of [NextAuth.js or Auth.js](https://authjs.dev/). Once v5 becomes the stable release, the starter-kit will also switch to the stable release.

An example OAuth authentication pipeline is setup using GitHub by following the instructions at the [API Reference Docs](https://authjs.dev/reference/nextjs/module.index) and [Upgrade to v5 Guide](https://authjs.dev/guides/upgrade-to-v5). A custom Login page and a Logout button have been added (Check out `<domain>/login` and `<domain>/dashboard/home`).

Again, adding environment variables is necessary. The format of environment variables for OAuth providers is `AUTH_<PROVIDER-NAME>_ID|SECRET`.

A complete list of in-built providers and instructions on how to set them up can be found at the [Provider Docs](https://authjs.dev/getting-started/providers).

The starter-kit uses `<domain>/api/auth/callback` as the OAuth callback URL (is required for OAuth provider setup).

The starter-kit also has a `src/app/middleware.ts` setup to handle authorization for routes.

Once authenticated, the user data is saved on the database via the Drizzle Adapter for NextAuth.js. The schema for the database is added from the [recommended one](https://authjs.dev/reference/adapter/drizzle#sqlitehttps://authjs.dev/reference/adapter/drizzle#sqlite) in the docs.

_Note: The SQLite adapter for Drizzle currently does not use async calls to the database. This leads to errors when the use is trying to login again. As of now, a custom function `getAdapter()` is being used to extend the adapter and make `getUserByAccount()` method of the adapter async. Once this fixed is merged in the official adapter, this will be changed in the starter-kit as well_

## Getting the Project Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx` and `src/app/layout.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository][next] - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

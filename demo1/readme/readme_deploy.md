# frontend (react vite)

- yarn build
- edit package.json (remove )
- npx serve -s ./dist

# backend

- npm i -g typescript dotenv ts-node ts-node-dev
- yarn build
- update mongo url (data-source.ts)

# env (dev and production)

- https://vitejs.dev/guide/env-and-mode.html
- .env and .env.production
- import.meta.env.VITE_VERSION

![.env file example](1.png)

```
VITE_VERSION=1.5 (DEV)
VITE_BACKEND_BASE_URL=http://localhost:8081
```

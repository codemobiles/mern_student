# update vite.config.ts

```
resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  }
```

- yarn add --dev @types/node

# update tsconfig.json

```
"types": ["node", "vite/client"],
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"]
  }
```

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
"baseUrl": "src",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["components/*"],
      "@/types/*": ["types/*"],
      "@/utils/*": ["utils/*"],
      "@/store/*": ["store/*"],
      "@/router/*": ["router/*"],
      "@/assets/*": ["assets/*"]
    }
```

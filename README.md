# Vite build --watch does not trigger reload when imported Sass module changes

## Recreate from scratch

```
npm create vite@latest vite-sass-modules --template react-ts
cd vite-sass-modules
npm i -D path
npm i -D @types/node
npm i -D sass

( add src/**/* files )

npx vite build --watch
```

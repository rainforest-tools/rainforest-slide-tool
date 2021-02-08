> * node package manager: npm
> * system theme package: [tailwindcss](https://tailwindcss.com)
## Path Aliases
* **vite.config.ts**
```typescript
export default defineConfig({
  ...,
  alias: [
    { find: "@", replacement: path.resolve(__dirname, 'src') }
  ],
  ...
})
```
* **tsconfig.json**
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```
## TailwindCSS
### optimizing for production
* see [optimizing for production](https://tailwindcss.com/docs/optimizing-for-production)
* https://intellisense.dev/post/vite-vue3-tailwindcss/
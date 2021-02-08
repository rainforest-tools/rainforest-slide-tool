> * node package manager: npm
> * system theme package: [tailwindcss](https://tailwindcss.com)
## vite-aliases
This Structure:
```
src
    assets
    components
    pages
    store
    utils
```
will generate the following:
```
{
    '@assets': '${your_project_path}/src/assets',
    '@components': '${your_project_path}/src/components'
    '@pages': '${your_project_path}/src/pages'
    '@store': '${your_project_path}/src/store'
    '@utils': '${your_project_path}/src/utils'
}
```
## TailwindCSS
### optimizing for production
* see [optimizing for production](https://tailwindcss.com/docs/optimizing-for-production)
* https://intellisense.dev/post/vite-vue3-tailwindcss/
import { createApp } from 'vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import { router } from './router'
import App from './App.vue'

createApp(App)
  .use(router)
  .mount('#app')

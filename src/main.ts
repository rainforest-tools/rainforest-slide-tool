import { createSSRApp } from 'vue'
import { createRouter } from './router'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App.vue'

export const createApp = () => {
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  return { app, router }
}

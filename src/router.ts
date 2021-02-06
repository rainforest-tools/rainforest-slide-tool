import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'

const pages = import.meta.glob('./pages/*.vue')

const routes = Object.keys(pages).map(path => {
  const filename = path.match(/\.\/pages(.*)\.vue$/)
  const name = filename && filename[1].toLowerCase()
  return {
    path: name === '/home' ? '/' : name,
    component: pages[path]
  } as RouteRecordRaw
})

export function createRouter() {
  return _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  })
}
import { createApp } from './main'
import { renderToString } from '@vue/server-renderer'

export async function render(url, manifest) {
  const { app, router } = createApp()

  // set the router to the desired URL before rendering
  router.push(url)
  await router.isReady()

  const ctx = {}
  const html = await renderToString(app, ctx)
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest)
  return [html, preloadLinks]
}

function renderPreloadLinks(modules, manifest) {
  let links = ''
  const seen = new Set()
  if (manifest)
    modules.forEach((id) => {
      const files = manifest[id]
      if (files) {
        files.forEach((file) => {
          if (!seen.has(file)) {
            seen.add(file)
            links += renderPreloadLink(file)
          }
        })
      }
    })
  return links
}

function renderPreloadLink(file) {
  if (file.endsWith('.js')) {
    return `<link rel="modulepreload" crossorigin href="${file}">`
  } else if (file.endsWith('.css')) {
    return `<link rel="stylesheet" href="${file}">`
  } else {
    // TODO
    return ''
  }
}
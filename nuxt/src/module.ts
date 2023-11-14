import { existsSync } from 'fs'
import { resolve } from 'pathe'
import { defineNuxtModule, addPluginTemplate, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  configPath?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'Vueform',
    configKey: 'vueform',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    configPath: undefined,
  },
  async setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.hook('prepare:types', (opts) => {
      opts.references.push({ types: '@vueform/vueform' })
    })

    nuxt.options.build.transpile.push('@vueform/vueform')

    nuxt.options.vite.optimizeDeps = {
      ...(nuxt.options.vite.optimizeDeps || {}),
      include: [
        ...(nuxt.options.vite.optimizeDeps?.include || []),
        'wnumb',
        'nouislider',
        'trix',
        'lodash',
        'axios',
      ]
    }

    let configBase = resolve(
      nuxt.options.rootDir,
      options.configPath || 'vueform.config.js'
    )

    addPluginTemplate({
      async getContents() {
        let configPath = await resolver.resolvePath(configBase)
        let configPathExists = existsSync(configPath)

        if (!configPathExists) {
          configBase = resolve(
            nuxt.options.rootDir,
            'vueform.config.ts'
          )

          configPath = await resolver.resolvePath(configBase)
          configPathExists = existsSync(configPath)

          if (!configPathExists) {
            throw new Error(
              `Vueform configuration was not located at ${configPath}`
            )
          }
        }

        return `import { defineNuxtPlugin } from '#imports'

        export default defineNuxtPlugin(async (nuxtApp) => {
          if (process.client) {
            const vueform = (await import('@vueform/vueform')).vueform
            const vueformConfig = (await import('${configPath}')).default
            
            nuxtApp.vueApp.use(vueform, vueformConfig)
          }
        })
        `
      },
      filename: 'vueformPlugin.mjs',
    })
  }
})

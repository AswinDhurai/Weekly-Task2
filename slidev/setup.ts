import { defineAppSetup } from '@slidev/types'
import { createApp } from 'vue'

// Dynamically import components from an external directory
export default defineAppSetup(({ app }) => {
  import('../slide-integrate/components/Para.vue').then((module) => {
    app.component('Para', module.default)
  })
})
export defineAppSetup(({ app }) => {
  import('../slide-integrate/app.vue').then((module) => {
    app.component('App', module.default)
  })
})
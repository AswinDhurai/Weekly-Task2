import { defineAppSetup } from '@slidev/types'
import ParagraphComponent from './components/Para.vue'

export default defineAppSetup(({ app }) => {
  app.component('ParagraphComponent', ParagraphComponent)
})

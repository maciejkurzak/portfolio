import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {cv} from './src/structure'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'n591yq65',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: cv,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

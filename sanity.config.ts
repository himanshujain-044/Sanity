import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'blog',

  projectId: 'wogh1fgb',
  dataset: 'development',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

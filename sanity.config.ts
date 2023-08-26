import {defineConfig} from 'sanity'
import {schemaTypes} from './schemas'
import settings from './schemas/settings'
import {media} from 'sanity-plugin-media'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {table} from '@sanity/table'
import {codeInput} from '@sanity/code-input'
import {muxInput} from 'sanity-plugin-mux-input'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import {dashboardTool, projectUsersWidget} from '@sanity/dashboard'
import {documentListWidget} from 'sanity-plugin-dashboard-widget-document-list'
import {pageStructure, singletonPlugin} from './plugins/settings'

export default defineConfig({
  name: 'default',
  title: 'Blog Studio',
  projectId: 'wogh1fgb',
  dataset: 'development',
  plugins: [
    dashboardTool({
      widgets: [
        documentListWidget({
          title: 'Recent 10 posts',
          query: '*[_type == "post"]',
          limit: 10, // createButtonText: 'Create new blog post'
        }),
        documentListWidget({
          title: 'Top 10 Author',
          query: '*[_type == "author"]',
          limit: 10, // createButtonText: 'Create new blog post'
        }),
        documentListWidget({
          title: 'Top 10 Category',
          query: '*[_type == "category"]',
          limit: 10, // createButtonText: 'Create new blog post'
        }),
        documentListWidget({
          title: 'Top 10 Tag',
          query: '*[_type == "tag"]',
          limit: 10, // createButtonText: 'Create new blog post'
        }),
        projectUsersWidget(),
      ],
    }),
    deskTool({
      structure: pageStructure([settings]),
    }),
    media(),
    visionTool(),
    singletonPlugin(['settings']),
    table(),
    codeInput(),
    muxInput({mp4_support: 'standard'}),
    unsplashImageAsset(),
  ],
  schema: {
    types: schemaTypes,
  },
})

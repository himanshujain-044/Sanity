import {defineField, defineType} from 'sanity'
import {  TagIcon } from '@sanity/icons'
export default defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon:TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    }),
  ],
})

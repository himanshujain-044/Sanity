import {defineField, defineType} from 'sanity'
import { StackCompactIcon} from '@sanity/icons'
export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon:StackCompactIcon,
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

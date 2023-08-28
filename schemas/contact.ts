import {defineField, defineType} from 'sanity'
import {  MobileDeviceIcon } from '@sanity/icons'
export default defineType({
  name: 'contact',
  title: 'Contact Page',
  type: 'document',
  icon:MobileDeviceIcon,
 
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      fields: [
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Image caption',
          description: 'Appears below image.',
        }),
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        }),
      ],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      description: 'description',
      media: 'mainImage',
    },
    prepare(selection) {
      const {description} = selection
      return {...selection, description: description}
    },
  },
})

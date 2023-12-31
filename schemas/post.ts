import {defineField, defineType} from 'sanity'
import {   BookIcon } from '@sanity/icons'
export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  icon:BookIcon,
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description: 'The excerpt is used in blog feeds, and also for search results',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'featured',
      title: 'Mark as Featured',
      type: 'boolean'
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'relatedPost',
      title: 'Related Post',
      type: 'array',
      of: [{type: 'reference', to: {type: 'post'}}],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})

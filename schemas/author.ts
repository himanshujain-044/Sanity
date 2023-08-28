import {defineField, defineType} from 'sanity'
import {  UserIcon } from '@sanity/icons'
export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Support Email',
      validation: Rule =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: 'email', // Error message is "Does not match email-pattern"
            invert: false // Boolean to allow any value that does NOT match pattern
          }
        )
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Support Phone'
    }),
    defineField({
      name: 'social',
      type: 'array',
      title: 'Social Links',
      description: 'Enter your Social Media URLs',
      validation: Rule => Rule.unique(),
      of: [
        {
          type: 'object',
          fields: [
            {
              type: 'string',
              name: 'media',
              title: 'Choose Social Media',
              options: {
                list: [
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Linkedin', value: 'linkedin' },
                  { title: 'Youtube', value: 'youtube' }
                ]
              }
            },
            {
              type: 'url',
              name: 'url',
              title: 'Full Profile URL'
            }
          ],
          preview: {
            select: {
              title: 'media',
              subtitle: 'url'
            }
          }
        }
      ]
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})

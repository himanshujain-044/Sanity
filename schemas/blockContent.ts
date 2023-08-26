import {defineType, defineArrayMember} from 'sanity'
import IframePreview from './previews/iframe'
import TablePreview from './previews/table'
import Player from './previews/mux'
export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike-through'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  {type: 'post'},
                  // other types you may want to link to
                ],
              },
            ],
          },
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      name: 'tables',
      title: 'Table',
      type: 'object',
      fields: [
        {
          name: 'table',
          title: 'Add Table',
          description:
            'The first row will be treated as the header. If you want to skip, just leave the first row empty.',
          type: 'table',
        },
      ],
      components: {
        preview: TablePreview,
      },
      preview: {
        select: {table: 'table'},
      },
    }),
    defineArrayMember({
      type: 'code',
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
    defineArrayMember({
      type: 'object',
      name: 'embed',
      title: 'Embed',
      fields: [
        {
          name: 'url',
          type: 'url',
          description:
            'Enter the URL to Embed \r\n(eg: https://youtube.com/embed/xxx or https://open.spotify.com/embed/track/xxxx)',
        },
        {
          name: 'height',
          type: 'number',
          description: 'Enter Required Height for this Embed. Leave it blank for 16:9 ratio.',
        },
      ],
      components: {
        preview: IframePreview,
      },
      preview: {},
    }),
    defineArrayMember({
      title: 'Video file',
      name: 'video',
      type: 'mux.video',
    }),
  ],
})

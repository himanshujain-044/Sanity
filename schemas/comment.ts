import {defineField, defineType} from 'sanity'
import { CommentIcon} from '@sanity/icons'

export default defineType({
  name: 'comment',
  type: 'document',
  title: 'Comment',
  icon:CommentIcon,
  options: {
    dateFormat: 'YYYY-MM-DD',
    timeFormat: 'HH:mm',
    timeStep: 15,
    calendarTodayLabel: 'Today'
  },
  fields: [
    defineField ( {
      name: 'name',
      title: 'User Name',
      type: 'string'
    }),
    defineField ({
      name: 'email',
      title: 'Email',
      type: 'string'
    }),
    defineField ({
      name: 'comment',
      title: 'Comment',
      type: 'text'
    }),
    defineField ({ name: 'childComments', title: 'Child Comments', type: 'array', of: [{ type: 'comment' }] }),
    defineField({
      name: 'approved',
      title: 'Approved',
      type: 'boolean'
    }),
    defineField({
      name: 'firstParentId',
      title: 'First Parent  Comment Id',
      type: 'string'
    }),
    defineField ({
      name: 'parentCommentId',
      title: 'Parent Comment Id',
      type: 'string'
    }),

    defineField({
      name: 'post',
      type: 'reference',
      to: [{ type: 'post' }],
      validation: Rule => [Rule.required().error('Field cannot be empty')]
    })
  ],
  preview: {
    select: {
      name: 'name',
      comment: 'comment',
      post: 'post.title'
    },
    prepare({ name, comment, post }) {
      return {
        title: `${name} on ${post}`,
        subtitle: comment
      }
    }
  }
})

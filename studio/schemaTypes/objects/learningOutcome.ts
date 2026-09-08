import { defineField, defineType } from 'sanity'
import { SparkleIcon } from '@sanity/icons'

export const learningOutcome = defineType({
  name: 'learningOutcome',
  title: 'Learning Outcome',
  type: 'object',
  icon: SparkleIcon,
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Lucide icon identifier',
      options: {
        list: [
          { title: 'Code', value: 'Code' },
          { title: 'Database', value: 'Database' },
          { title: 'Cpu', value: 'Cpu' },
          { title: 'Layers', value: 'Layers' },
          { title: 'Shield', value: 'Shield' },
          { title: 'Zap', value: 'Zap' },
          { title: 'Server', value: 'Server' },
          { title: 'Layout', value: 'Layout' },
          { title: 'Globe', value: 'Globe' },
          { title: 'Terminal', value: 'Terminal' },
          { title: 'CheckCircle', value: 'CheckCircle' },
          { title: 'BookOpen', value: 'BookOpen' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})

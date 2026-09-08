import { defineArrayMember, defineField, defineType } from 'sanity'
import { BookIcon } from '@sanity/icons'

export const course = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      description: 'Short summary for course cards and overview (max 200 characters)',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'level',
      title: 'Skill Level',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price ($ USD)',
      type: 'number',
      description: 'Enter 0 for free courses',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'popular',
      title: 'Popular Flag',
      type: 'boolean',
      description: 'Feature this course as popular in the catalog',
      initialValue: false,
    }),
    defineField({
      name: 'studentCount',
      title: 'Student Count (Display only)',
      type: 'number',
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: 'learningOutcomes',
      title: "What You'll Learn",
      description: 'Key learning outcomes (max 6)',
      type: 'array',
      of: [defineArrayMember({ type: 'learningOutcome' })],
      validation: (rule) => rule.max(6),
    }),
    defineField({
      name: 'instructor',
      title: 'Instructor',
      type: 'reference',
      to: [{ type: 'instructor' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [defineArrayMember({ type: 'module' })],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      instructor: 'instructor.name',
      level: 'level',
    },
    prepare({ title, media, instructor, level }) {
      const levelLabel = level ? level.charAt(0).toUpperCase() + level.slice(1) : ''
      return {
        title: title || 'Untitled Course',
        media,
        subtitle: [instructor, levelLabel].filter(Boolean).join(' • '),
      }
    },
  },
})
